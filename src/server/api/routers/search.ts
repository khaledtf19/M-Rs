import { z } from "zod";
import { SearchResultsType } from "~/types/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        curser: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      let { query, curser } = input;
      curser = curser ?? 1;

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${curser}`
      );
      const data = (await response.json()) as SearchResultsType;

      return {
        nextPage: curser + 1,
        maxPages: data.total_pages,
      };
    }),
});
