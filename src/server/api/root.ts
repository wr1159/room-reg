import { createTRPCRouter } from "~/server/api/trpc";
import { bidRouter } from "~/server/api/routers/bid";
import { roomRouter } from "~/server/api/routers/room";
import { userRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bid: bidRouter,
  room: roomRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
