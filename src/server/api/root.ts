import { createTRPCRouter } from "~/server/api/trpc";
import { formSubmissionRouter } from "./routers/formSubmission";
import { usersRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: usersRouter,
  formSubmission: formSubmissionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
