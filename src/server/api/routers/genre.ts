import { AllGenres } from "~/utils/utils";

import { adminProcedure, createTRPCRouter } from "../trpc";

export const genreRouter = createTRPCRouter({
  createGenres: adminProcedure.query(async ({ ctx }) => {
    console.log(ctx.prisma.genre.count());
    if ((await ctx.prisma.genre.count()) !== 0) {
      return { message: "All genres already created" };
    }

    await ctx.prisma.genre.createMany({
      data: AllGenres.tv.map((genre) => ({ name: genre.name, MDBID: genre.id, type: "tv" })),
    });

    await ctx.prisma.genre.createMany({
      data: AllGenres.movie.map((genre) => ({ name: genre.name, MDBID: genre.id, type: "movie" })),
    })
    return { message: "All genres created successfully" };
  }),
});
