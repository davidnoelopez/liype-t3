import { type PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
  existEmail: publicProcedure
    .input(
      z
        .string({ required_error: "Se requiere un correo." })
        .email({ message: "El correo no es válido." })
        .min(1, { message: "El correo no es válido." })
        .max(50, { message: "El correo no es válido." })
        .toLowerCase()
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user
        .findUnique({
          select: {
            id: true,
          },
          where: {
            email: input,
          },
        })
        .then((userId) => {
          return userId ? true : false;
        })
        .catch((err: PrismaClientKnownRequestError) => {
          if (err.code === "P2025") {
            return false;
          }
          throw err;
        });
    }),
});
