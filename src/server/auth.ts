import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type Role } from "@prisma/client";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        role: user.role,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: env.EMAIL_SERVER,
      from: "Verificación <verify@nogiistudio.com>",
      generateVerificationToken: () => {
        // generate a 6 character, base 36 (0-9, a-z). e.g. 2C7B8S
        return Math.random().toString(36).slice(2, 8).toUpperCase();
      },
      sendVerificationRequest: ({ identifier: email, url, token }) => {
        const resend = new Resend(env.RESEND_API_KEY);

        try {
          resend.sendEmail({
            from: "Verificación <no-reply@nogiistudio.com>",
            to: [email],
            subject: "Token de verificación",
            text: `Hola,\n\nVerifica tu cuenta presionando este link: \n${url}. \n\nO usa el token: ${token}\n\n`,
          });
          console.log("Verification email sent successfully to: " + email);
        } catch (error) {
          console.log(error);
        }
      },
      maxAge: 10 * 60, // 10 minutes
    }),
  ],
  pages: {
    signIn: "/dashboard/signin",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
