import { MediaType } from "@prisma/client";
import { z } from "zod";
import { MediaArr } from "~/types/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const mediaRouter = createTRPCRouter({
  createMedia: publicProcedure
    .input(z.object({ MDBId: z.number(), type: z.enum(MediaArr) }))
    .mutation(async ({ input, ctx }) => {
      let media = await ctx.prisma.media.findFirst({
        where: { MDBID: input.MDBId, type: input.type },
      });
      if (media) return media.id
      
      return;
    }),
});
