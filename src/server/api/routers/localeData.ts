import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const localeDataRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.localeData.findMany();
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.localeData.findUnique({ where: { id: input.id } });
    }),
});
