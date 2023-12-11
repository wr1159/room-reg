import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bidRouter = createTRPCRouter({
  listRooms: publicProcedure.query(({ ctx }) => {
    return ctx.db.room.findMany();
  }),
  bidRoom: publicProcedure
    .input(z.object({ studentId: z.number(), roomId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      ctx.db.room.update({
        where: {
          id: input.roomId,
        },
        data: {
          occupantId: input.roomId,
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
