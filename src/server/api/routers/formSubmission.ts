import { FormSubmission } from "@prisma/client";
import { Resend } from "resend";
import { number, z } from "zod";
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

      const recipients =
        env.NODE_ENV === "production"
          ? ["contacto@liype.com"]
          : ["davidnoelopez@gmail.com"];

      await resend
        .sendEmail({
          from: "Nuevo Registro <no-reply@nogiistudio.com>",
          to: recipients,
          bcc: ["david@nogiistudio.com"],
          subject: "Nuevo registro",
          react: NewSubmissionEmail({
            formSubmission: submission as FormSubmission,
          }),
        })
        .then(() => {
          console.log("Registro enviado ", submission.id);
        })
        .catch((error) => {
          console.error(error);
        });

      return submission;
    }),

  getAll: protectedProcedure
    .input(
      z.object({
        page: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const [count, data] = await ctx.prisma.$transaction([
        ctx.prisma.formSubmission.count(),
        ctx.prisma.formSubmission.findMany({
          take: 10,
          skip: input.page ? (input.page - 1) * 10 : 0,
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);

      return {
        count,
        data,
      };
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
