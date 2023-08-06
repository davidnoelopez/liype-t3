import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const formSubmissionRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z
          .string({
            required_error: "Se requiere un nombre.",
          })
          .min(1)
          .max(50),
        email: z
          .string({
            required_error: "Se requiere un correo.",
          })
          .email(),
        phone: z.string().max(15).optional(),
        company: z.string().max(50).optional(),
        role: z.string().max(50).optional(),
        city: z.string().max(50).optional(),
        state: z.string().max(50).optional(),
        message: z.string().min(1).max(500).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.formSubmission.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          company: input.company,
          role: input.role,
          city: input.city,
          state: input.state,
          message: input.message,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.formSubmission.findMany();
  }),
});
