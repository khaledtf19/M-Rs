import { z } from "zod";
import { env } from "~/env.mjs";
import { CardType, SearchResultsType } from "~/types/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ query: z.string(), page: z.number() }))
    .mutation(async ({ input }) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${input.query}&include_adult=false&language=en-US&page=${input.page}`,
        {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${env.TMDB_API_KEY}`,
          },
        }
      );
      const data = (await response.json()) as SearchResultsType;
      const results = data?.results?.map((movie) => ({
        id: movie.id,
        title: movie.title || movie.name,
        image: movie.poster_path,
        description: movie.overview,
        type: movie.media_type,
        releaseDate: movie.release_date,
      })) as CardType[];

      return {
        maxPages: data.total_pages,
        results: results,
        page: data.page,
      };
    }),
});
