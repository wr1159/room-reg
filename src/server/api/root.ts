import { createTRPCRouter } from "~/server/api/trpc";
import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { generateOpenApiDocument } from "trpc-openapi";

import { bidRouter } from "~/server/api/routers/bid";
import { roomRouter } from "~/server/api/routers/room";
import { userRouter } from "./routers/users";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */

const routers = {
  bid: bidRouter,
  room: roomRouter,
  user: userRouter,
};

export const appRouter = createTRPCRouter(routers);

// const t = initTRPC
//   .context<typeof createTRPCContext>()
//   .meta<OpenApiMeta>()
//   .create();

// export const httpRouter = t.router({
//   listUsers: t.procedure
//     .meta({ /* 👉 */ openapi: { method: "GET", path: "/users" } })
//     .query(({ ctx }) => {
//       return ctx.db.user.findMany({
//         include: {
//           gender: {
//             select: {
//               description: true,
//             },
//           },
//           occupies: true,
//         },
//         orderBy: {
//           points: "desc",
//         },
//       });
//     }),
// });

// export const openApiDocument = generateOpenApiDocument(httpRouter, {
//   title: "tRPC OpenAPI",
//   version: "1.0.0",
//   baseUrl: "http://localhost:3001",
// });

// export type definition of API
export type AppRouter = typeof appRouter;
