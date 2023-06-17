import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pageDataRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.pageData.findMany();
  }),
  getLocaleDataByName: publicProcedure
    .input(z.object({ name: z.string(), locale: z.string().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.pageData.findUnique({
        select: {
          localeData: {
            select: { text: true },
            where: { locale: input.locale },
          },
        },
        where: { name: input.name },
      });
    }),
});
