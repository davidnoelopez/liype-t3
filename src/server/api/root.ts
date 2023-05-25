import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { localeDataRouter } from "./routers/localeData";
import { pageDataRouter } from "./routers/pageData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  localeData: localeDataRouter,
  pageData: pageDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
