import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedGenders() {
  const male = await prisma.gender.upsert({
    where: { int: 1 },
    create: {
      description: "Male",
    },
    update: {},
  });

  const female = await prisma.gender.upsert({
    where: { int: 2 },
    create: {
      description: "Female",
    },
    update: {},
  });
}
async function seedUsers() {
  const alice = await prisma.user.upsert({
    where: { id: 1 },
    create: {
      name: "Alice",
      points: 121,
      genderId: 2,
    },
    update: {},
  });

  const bob = await prisma.user.upsert({
    where: { id: 2 },
    create: {
      name: "Bob",
      points: 89,
      genderId: 1,
    },
    update: {},
  });

  const charlie = await prisma.user.upsert({
    where: { id: 3 },
    create: {
      name: "Charlie",
      points: 97,
      genderId: 1,
    },
    update: {},
  });

  const dave = await prisma.user.upsert({
    where: { id: 4 },
    create: {
      name: "Dave",
      points: 100,
      genderId: 1,
    },
    update: {},
  });

  const eve = await prisma.user.upsert({
    where: { id: 5 },
    create: {
      name: "Eve",
      points: 113,
      genderId: 2,
    },
    update: {},
  });
}

async function seedRooms() {
  const room1 = await prisma.room.upsert({
    where: { id: 1 },
    create: {
      name: "3-108",
      genderId: 1,
    },
    update: {},
  });

  const room2 = await prisma.room.upsert({
    where: { id: 2 },
    create: {
      name: "4-210",
      genderId: 1,
    },
    update: {},
  });

  const room3 = await prisma.room.upsert({
    where: { id: 3 },
    create: {
      name: "5-317",
      genderId: 2,
    },
    update: {},
  });

  const room4 = await prisma.room.upsert({
    where: { id: 4 },
    create: {
      name: "6-425",
      genderId: 1,
    },
    update: {},
  });

  const room5 = await prisma.room.upsert({
    where: { id: 5 },
    create: {
      name: "7-111",
      genderId: 2,
    },
    update: {},
  });

  const room6 = await prisma.room.upsert({
    where: { id: 6 },
    create: {
      name: "8-105",
      genderId: 2,
    },
    update: {},
  });

  const room7 = await prisma.room.upsert({
    where: { id: 7 },
    create: {
      name: "2-210",
      genderId: 1,
    },
    update: {},
  });
}

async function main() {
  await seedGenders();
  await seedUsers();
  await seedRooms();
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
