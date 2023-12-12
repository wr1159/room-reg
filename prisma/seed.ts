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
      matricNumber: "A0123456A",
      points: 121,
      genderId: 2,
    },
    update: {},
  });

  const bob = await prisma.user.upsert({
    where: { id: 2 },
    create: {
      name: "Bob",
      matricNumber: "nitrpd",
      points: 89,
      genderId: 1,
    },
    update: {},
  });

  const charlie = await prisma.user.upsert({
    where: { id: 3 },
    create: {
      name: "Charlie",
      matricNumber: "A1234567C",
      points: 97,
      genderId: 1,
    },
    update: {},
  });

  const dave = await prisma.user.upsert({
    where: { id: 4 },
    create: {
      name: "Dave",
      matricNumber: "A7654321D",
      points: 100,
      genderId: 1,
    },
    update: {},
  });

  const eve = await prisma.user.upsert({
    where: { id: 5 },
    create: {
      name: "Eve",
      matricNumber: "A2345678E",
      points: 113,
      genderId: 2,
    },
    update: {},
  });

  const francesca = await prisma.user.upsert({
    where: { id: 6 },
    create: {
      name: "Francesca",
      matricNumber: "A3456789F",
      points: 101,
      genderId: 2,
    },
    update: {},
  });

  const george = await prisma.user.upsert({
    where: { id: 7 },
    create: {
      name: "George",
      matricNumber: "A4567890G",
      points: 99,
      genderId: 1,
    },
    update: {},
  });

  const harry = await prisma.user.upsert({
    where: { id: 8 },
    create: {
      name: "Harry",
      matricNumber: "A5678901H",
      points: 120,
      genderId: 1,
    },
    update: {},
  });

  const ian = await prisma.user.upsert({
    where: { id: 9 },
    create: {
      name: "Ian",
      matricNumber: "A6789012I",
      points: 111,
      genderId: 1,
    },
    update: {},
  });

  const joanne = await prisma.user.upsert({
    where: { id: 10 },
    create: {
      name: "Joanne",
      matricNumber: "A7890123J",
      points: 98,
      genderId: 2,
    },
    update: {},
  });

  const karen = await prisma.user.upsert({
    where: { id: 11 },
    create: {
      name: "Karen",
      matricNumber: "A8901234K",
      points: 102,
      genderId: 2,
    },
    update: {},
  });

  const larry = await prisma.user.upsert({
    where: { id: 12 },
    create: {
      name: "Larry",
      matricNumber: "A9012345L",
      points: 110,
      genderId: 1,
    },
    update: {},
  });

  const mary = await prisma.user.upsert({
    where: { id: 13 },
    create: {
      name: "Mary",
      matricNumber: "A0123456M",
      points: 114,
      genderId: 2,
    },
    update: {},
  });

  const nancy = await prisma.user.upsert({
    where: { id: 14 },
    create: {
      name: "Nancy",
      matricNumber: "A1234567N",
      points: 115,
      genderId: 2,
    },
    update: {},
  });

  const oscar = await prisma.user.upsert({
    where: { id: 15 },
    create: {
      name: "Oscar",
      matricNumber: "A2345678O",
      points: 116,
      genderId: 1,
    },
    update: {},
  });

  const peter = await prisma.user.upsert({
    where: { id: 16 },
    create: {
      name: "Peter",
      matricNumber: "A3456789P",
      points: 117,
      genderId: 1,
    },
    update: {},
  });

  const quentin = await prisma.user.upsert({
    where: { id: 17 },
    create: {
      name: "Quentin",
      matricNumber: "A4567890Q",
      points: 118,
      genderId: 1,
    },
    update: {},
  });

  const robert = await prisma.user.upsert({
    where: { id: 18 },
    create: {
      name: "Robert",
      matricNumber: "A5678901R",
      points: 119,
      genderId: 1,
    },
    update: {},
  });

  const sarah = await prisma.user.upsert({
    where: { id: 19 },
    create: {
      name: "Sarah",
      matricNumber: "A6789012S",
      points: 103,
      genderId: 2,
    },
    update: {},
  });

  const tom = await prisma.user.upsert({
    where: { id: 20 },
    create: {
      name: "Tom",
      matricNumber: "A7890123T",
      points: 104,
      genderId: 1,
    },
    update: {},
  });

  const ursula = await prisma.user.upsert({
    where: { id: 21 },
    create: {
      name: "Ursula",
      matricNumber: "A8901234U",
      points: 105,
      genderId: 2,
    },
    update: {},
  });

  const victor = await prisma.user.upsert({
    where: { id: 22 },
    create: {
      name: "Victor",
      matricNumber: "A9012345V",
      points: 106,
      genderId: 1,
    },
    update: {},
  });

  const wendy = await prisma.user.upsert({
    where: { id: 23 },
    create: {
      name: "Wendy",
      matricNumber: "A0123456W",
      points: 107,
      genderId: 2,
    },
    update: {},
  });

  const xavier = await prisma.user.upsert({
    where: { id: 24 },
    create: {
      name: "Xavier",
      matricNumber: "A1234567X",
      points: 108,
      genderId: 1,
    },
    update: {},
  });

  const yvonne = await prisma.user.upsert({
    where: { id: 25 },
    create: {
      name: "Yvonne",
      matricNumber: "A2345678Y",
      points: 109,
      genderId: 2,
    },
    update: {},
  });

  const zack = await prisma.user.upsert({
    where: { id: 26 },
    create: {
      name: "Zack",
      matricNumber: "A3456789Z",
      points: 112,
      genderId: 1,
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
