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

  getHighestUnoccupiedPoints: publicProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        occupies: null,
      },
      orderBy: {
        points: "desc",
      },
    });

    return user ? user.points : 0;
  }),

  getUser: publicProcedure
    .input(z.object({ matricNumber: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.user.findFirst({
        where: {
          matricNumber: input.matricNumber,
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
  getUsersByPoints: publicProcedure
    .input(z.object({ points: z.number().min(0) }))
    .query(async ({ ctx, input }) => {
      const users = await ctx.db.user.findMany({
        where: {
          points: input.points,
        },
        select: {
          name: true,
        },
      });

      return users.map((user) => user.name);
    }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        genderId: z.number().min(1).max(2),
        points: z.number().min(0),
        matricNumber: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          genderId: input.genderId,
          points: input.points,
          matricNumber: input.matricNumber,
        },
      });
    }),
});
