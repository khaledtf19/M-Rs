import { TRPCError } from "@trpc/server";
import axios from "axios";
import { z } from "zod";
import { env } from "~/env.mjs";
import { NewMediaResultType } from "~/types/media";
import { MediaArr } from "~/types/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const mediaRouter = createTRPCRouter({
  getOrCreateMedia: publicProcedure
    .input(z.object({ MDBId: z.number(), type: z.enum(MediaArr) }))
    .mutation(async ({ input, ctx }) => {
      const media = await ctx.prisma.media.findFirst({
        where: { MDBID: input.MDBId, type: input.type },
      });
      if (media) return {id:media.id};
      const searchForNewMedia = await axios.get<NewMediaResultType>(
        `https://api.themoviedb.org/3/${input.type}/${input.MDBId}`,
        {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${env.TMDB_API_KEY}`,
          },
        }
      );
      if (!searchForNewMedia.data) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Movie not found" });
      }
      const genres = await ctx.prisma.genre.findMany({
        where: {
          MDBID: { in: searchForNewMedia.data.genres.map((genre) => genre.id) },
          type: input.type,
        },
        select: { id: true },
      });

         const newMedia = await ctx.prisma.media.create({
        data: {
          name: searchForNewMedia.data.title || searchForNewMedia.data.name,
          poster_path: searchForNewMedia.data.poster_path,
          overview: searchForNewMedia.data.overview,
          MDBID: searchForNewMedia.data.id,
          imdb_id: searchForNewMedia.data.imdb_id,
          type: input.type,
          backdrop_path: searchForNewMedia.data.backdrop_path,
          release_date: searchForNewMedia.data.release_date,
          production_countrie:
            searchForNewMedia.data.production_countries[0]?.iso_3166_1,
          spoken_language:
            searchForNewMedia.data.spoken_languages[0]?.iso_639_1,
          tagline: searchForNewMedia.data.tagline,
          genres: {
            connect: genres,
          },
        },
      });
      return {id: newMedia.id};
    }),
});
