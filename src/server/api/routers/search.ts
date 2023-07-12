import { z } from "zod";
import { env } from "~/env.mjs";
import { CardType, SearchResultsType } from "~/types/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      const cursor = input.cursor ?? 1;

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${input.query}&include_adult=false&language=en-US&page=${cursor}`,
        {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${env.TMDB_API_KEY}`,
          },
        }
      );
      const data = (await response.json()) as SearchResultsType;
    console.log(data)
         if (!data||data.results.length === 0)
        return {
          results: undefined,
          nextPage: undefined,
          prevPage: undefined,
          maxPages: 0,
        };
      const results = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title || movie.name,
        image: movie.poster_path,
        description: movie.overview,
        type: movie.media_type,
      })) as CardType[];

      return {
        curser: cursor,
        nextPage: cursor + 1,
        prevPage: cursor - 1,
        maxPages: data.total_pages,
        results: results,
      };
    }),
});
