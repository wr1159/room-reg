import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const roomRouter = createTRPCRouter({
  listRooms: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.room.findMany({
        include: {
          occupant: true,
          gender: {
            select: {
              description: true,
            },
          },
        },
      });
    }),

  getRoom: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.room.findFirst({
        where: {
          id: input.id,
        },
        include: {
          occupant: true,
          gender: {
            select: {
              description: true,
            },
          },
        },
      });
    }),
});
