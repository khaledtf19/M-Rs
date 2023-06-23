import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input, ctx }) => {
      if (ctx.auth.userId) {
        return {
          greeting: `Hello ${input.text} from server`,
        };
      }
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  createOne: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.example.create({
        data: {
          text: input.text,
        },
      });
    }),
});
