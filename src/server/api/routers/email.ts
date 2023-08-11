import { Resend } from "resend";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import NewSubmissionEmail from "~/server/emails/new-submission";

export const emailRouter = createTRPCRouter({
  formSubmissionEmail: publicProcedure
    .input(
      z.object({
        id: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        company: z.string().optional(),
        role: z.string().optional(),
        city: z.string(),
        state: z.string(),
        message: z.string(),
      })
    )
    .query(async ({ input: formSubmission }) => {
      const resend = new Resend("re_123456789");

      resend.sendEmail({
        from: "Nuevo Registro <hi@nogiistudio.com>",
        to: "davidnoelopez@gmail.com",
        subject: "Nuevo registro",
        react: NewSubmissionEmail({
          formSubmission: {
            id: formSubmission.id!,
            createdAt: formSubmission.createdAt!,
            updatedAt: formSubmission.updatedAt!,
            name: formSubmission.name!,
            email: formSubmission.email!,
            phone: formSubmission.phone ?? null,
            company: formSubmission.company ?? null,
            role: formSubmission.role ?? null,
            city: formSubmission.city!,
            state: formSubmission.state!,
            message: formSubmission.message!,
          },
        }),
      });

      return { success: true };
    }),
});
