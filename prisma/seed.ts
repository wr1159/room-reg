import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { id: 1 },
    create: {
      name: "Alice",
      points: 121,
    },
    update: {},
  });

  const bob = await prisma.user.upsert({
    where: { id: 2 },
    create: {
      name: "Bob",
      points: 89,
    },
    update: {},
  });

  const charlie = await prisma.user.upsert({
    where: { id: 3 },
    create: {
      name: "Charlie",
      points: 97,
    },
    update: {},
  });

  const dave = await prisma.user.upsert({
    where: { id: 4 },
    create: {
      name: "Dave",
      points: 100,
    },
    update: {},
  });

  const eve = await prisma.user.upsert({
    where: { id: 5 },
    create: {
      name: "Eve",
      points: 113,
    },
    update: {},
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
