import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  listUsers: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      include: {
        gender: {
          select: {
            description: true,
          },
        },
        occupies: true,
      },
      orderBy: {
        points: "desc",
      },
    });
  }),

  getUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
        include: {
          gender: {
            select: {
              description: true,
            },
          },
          occupies: true,
        },
      });
    }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        genderId: z.number().min(1).max(2),
        points: z.number().min(0),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          genderId: input.genderId,
          points: input.points,
        },
      });
    }),
});
