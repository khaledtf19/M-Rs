import { AllGenres } from "~/utils/utils";

import { adminProcedure, createTRPCRouter } from "../trpc";

export const genreRouter = createTRPCRouter({
  createGenres: adminProcedure.query(async ({ ctx }) => {
    if ((await ctx.prisma.genre.count()) !== 0) {
      return { message: "All genres already created" };
    }
    await ctx.prisma.genre.createMany({
      data: AllGenres,
    });
    return { message: "All genres created successfully" };
  }),
});
