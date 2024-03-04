import { FormSubmission } from "@prisma/client";
import { Resend } from "resend";
import { z } from "zod";
import { env } from "~/env.mjs";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import NewSubmissionEmail from "~/server/emails/new-submission";

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
        city: z.string().max(50),
        state: z.string().max(50),
        message: z.string().min(1).max(500),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const submission = await ctx.prisma.formSubmission.create({
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

      const resend = new Resend(env.RESEND_API_KEY);

      await resend.sendEmail({
        from: "Nuevo Registro <no-reply@nogiistudio.com>",
        to: [
          "contacto@liype.com",
          "operaciones@licenciasypermisos.com.mx",
          "anapaola.gonzalez@liype.com",
        ],
        bcc: "david@nogiistudio.com",
        subject: "Nuevo registro",
        react: NewSubmissionEmail({
          formSubmission: submission as FormSubmission,
        }),
      });

      return submission;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.formSubmission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input: id }) => {
      return await ctx.prisma.formSubmission.findUnique({
        where: {
          id: id,
        },
      });
    }),
});
