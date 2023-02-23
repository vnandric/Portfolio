import { createTRPCRouter } from "~/server/api/trpc";
import { mailRouter } from "~/server/api/routers/mail";
import { booksRouter} from "~/server/api/routers/books";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mail: mailRouter,
  book: booksRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
