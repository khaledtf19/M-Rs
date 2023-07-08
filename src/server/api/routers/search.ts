import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  search: publicProcedure.input(z.object({ query: z.string() })).query(({ input }) => {
    return input.query; 
  })
})
