import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bidRouter = createTRPCRouter({
  bidRoom: publicProcedure
    .input(z.object({ userId: z.number(), roomId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      ctx.db.user.update({
        where: {
          id: input.userId,
        },
        data: {
          occupies: {
            connect: {
              id: input.roomId,
            },
          },
        },
      });

      ctx.db.room.update({
        where: {
          id: input.roomId,
        },
        data: {
          occupant: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),

  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  // create: publicProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //       },
  //     });
  //   }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });
  // }),
});
