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
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Alice",
      matricNumber: "A0123456A",
      points: 121,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const bob = await prisma.user.upsert({
    where: { id: 2 },
    create: {
      name: "Bob",
      matricNumber: "A1234567B",
      points: 89,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Bob",
      matricNumber: "A1234567B",
      points: 89,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const charlie = await prisma.user.upsert({
    where: { id: 3 },
    create: {
      name: "Charlie",
      matricNumber: "A1234567C",
      points: 97,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Charlie",
      matricNumber: "A1234567C",
      points: 97,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const dave = await prisma.user.upsert({
    where: { id: 4 },
    create: {
      name: "Dave",
      matricNumber: "A7654321D",
      points: 100,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Dave",
      matricNumber: "A7654321D",
      points: 100,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const eve = await prisma.user.upsert({
    where: { id: 5 },
    create: {
      name: "Eve",
      matricNumber: "A2345678E",
      points: 113,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Eve",
      matricNumber: "A2345678E",
      points: 113,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const francesca = await prisma.user.upsert({
    where: { id: 6 },
    create: {
      name: "Francesca",
      matricNumber: "A3456789F",
      points: 101,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Francesca",
      matricNumber: "A3456789F",
      points: 101,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const george = await prisma.user.upsert({
    where: { id: 7 },
    create: {
      name: "George",
      matricNumber: "A4567890G",
      points: 99,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "George",
      matricNumber: "A4567890G",
      points: 99,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const harry = await prisma.user.upsert({
    where: { id: 8 },
    create: {
      name: "Harry",
      matricNumber: "A5678901H",
      points: 120,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Harry",
      matricNumber: "A5678901H",
      points: 120,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const ian = await prisma.user.upsert({
    where: { id: 9 },
    create: {
      name: "Ian",
      matricNumber: "A6789012I",
      points: 111,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Ian",
      matricNumber: "A6789012I",
      points: 111,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const joanne = await prisma.user.upsert({
    where: { id: 10 },
    create: {
      name: "Joanne",
      matricNumber: "A7890123J",
      points: 98,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Joanne",
      matricNumber: "A7890123J",
      points: 98,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const karen = await prisma.user.upsert({
    where: { id: 11 },
    create: {
      name: "Karen",
      matricNumber: "A8901234K",
      points: 102,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Karen",
      matricNumber: "A8901234K",
      points: 102,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const larry = await prisma.user.upsert({
    where: { id: 12 },
    create: {
      name: "Larry",
      matricNumber: "A9012345L",
      points: 110,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Larry",
      matricNumber: "A9012345L",
      points: 110,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const mohammad = await prisma.user.upsert({
    where: { id: 13 },
    create: {
      name: "Mohammad",
      matricNumber: "A0123456M",
      points: 114,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Mohammad",
      matricNumber: "A0123456M",
      points: 114,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const nancy = await prisma.user.upsert({
    where: { id: 14 },
    create: {
      name: "Nancy",
      matricNumber: "A1234567N",
      points: 115,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Nancy",
      matricNumber: "A1234567N",
      points: 115,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const oscar = await prisma.user.upsert({
    where: { id: 15 },
    create: {
      name: "Oscar",
      matricNumber: "A2345678O",
      points: 116,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Oscar",
      matricNumber: "A2345678O",
      points: 116,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const peter = await prisma.user.upsert({
    where: { id: 16 },
    create: {
      name: "Peter",
      matricNumber: "A3456789P",
      points: 117,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Peter",
      matricNumber: "A3456789P",
      points: 117,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const quentin = await prisma.user.upsert({
    where: { id: 17 },
    create: {
      name: "Quentin",
      matricNumber: "A4567890Q",
      points: 118,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Quentin",
      matricNumber: "A4567890Q",
      points: 118,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const robert = await prisma.user.upsert({
    where: { id: 18 },
    create: {
      name: "Robert",
      matricNumber: "A5678901R",
      points: 119,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Robert",
      matricNumber: "A5678901R",
      points: 119,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const sarah = await prisma.user.upsert({
    where: { id: 19 },
    create: {
      name: "Sarah",
      matricNumber: "A6789012S",
      points: 69,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Sarah",
      matricNumber: "A6789012S",
      points: 69,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const tom = await prisma.user.upsert({
    where: { id: 20 },
    create: {
      name: "Tom",
      matricNumber: "A7890123T",
      points: 75,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Tom",
      matricNumber: "A7890123T",
      points: 75,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const ursula = await prisma.user.upsert({
    where: { id: 21 },
    create: {
      name: "Ursula",
      matricNumber: "A8901234U",
      points: 120,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Ursula",
      matricNumber: "A8901234U",
      points: 120,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const victor = await prisma.user.upsert({
    where: { id: 22 },
    create: {
      name: "Victor",
      matricNumber: "A9012345V",
      points: 106,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Victor",
      matricNumber: "A9012345V",
      points: 106,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const wendy = await prisma.user.upsert({
    where: { id: 23 },
    create: {
      name: "Wendy",
      matricNumber: "A0123456W",
      points: 107,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Wendy",
      matricNumber: "A0123456W",
      points: 107,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const xavier = await prisma.user.upsert({
    where: { id: 24 },
    create: {
      name: "Xavier",
      matricNumber: "A1234567X",
      points: 108,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Xavier",
      matricNumber: "A1234567X",
      points: 108,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });

  const yvonne = await prisma.user.upsert({
    where: { id: 25 },
    create: {
      name: "Yvonne",
      matricNumber: "A2345678Y",
      points: 109,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Yvonne",
      matricNumber: "A2345678Y",
      points: 109,
      genderId: 2,
      phoneNumber: "+6581366963",
    },
  });

  const zack = await prisma.user.upsert({
    where: { id: 26 },
    create: {
      name: "Zack",
      matricNumber: "A3456789Z",
      points: 56,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
    update: {
      name: "Zack",
      matricNumber: "A3456789Z",
      points: 56,
      genderId: 1,
      phoneNumber: "+6581366963",
    },
  });
}

async function seedRooms() {
  let id = 84
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-309",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-308",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-307",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-306",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-305",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-304",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-303",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-302",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-301",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-209",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-208",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-207",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-206",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-203",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;

  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-202",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-201",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-109",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-108",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-107",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-106",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;

  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-105",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-104",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-103",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-102",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-311",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-312",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-313",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-314",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-315",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-316",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-317",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-318",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });

    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-319",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-320",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-211",
        genderId: 2,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-212",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-213",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
  //   id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-214",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-215",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-216",
        genderId: 2,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-217",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-218",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-219",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-220",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-111",
        genderId: 1,
        isDouble: false,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-112",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-113",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-114",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-115",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
  await prisma.room.upsert({
      where: {id: id},
      create: {
        name: "4-116",
        genderId: 1,
        isDouble: true,
      },
      update: {},
    });
    id++;
    
  // const room1 = await prisma.room.upsert({
  //   where: { id: 1 },
  //   create: {
  //     name: "3-108",
  //     genderId: 1,
  //   },
  //   update: {},
  // });

  // const room2 = await prisma.room.upsert({
  //   where: { id: 2 },
  //   create: {
  //     name: "4-210",
  //     genderId: 1,
  //   },
  //   update: {},
  // });

  // const room3 = await prisma.room.upsert({
  //   where: { id: 3 },
  //   create: {
  //     name: "5-317",
  //     genderId: 2,
  //   },
  //   update: {},
  // });

  // const room4 = await prisma.room.upsert({
  //   where: { id: 4 },
  //   create: {
  //     name: "6-425",
  //     genderId: 1,
  //   },
  //   update: {},
  // });

  // const room5 = await prisma.room.upsert({
  //   where: { id: 5 },
  //   create: {
  //     name: "7-111",
  //     genderId: 2,
  //   },
  //   update: {},
  // });

  // const room6 = await prisma.room.upsert({
  //   where: { id: 6 },
  //   create: {
  //     name: "8-105",
  //     genderId: 2,
  //   },
  //   update: {},
  // });

  // const room7 = await prisma.room.upsert({
  //   where: { id: 7 },
  //   create: {
  //     name: "4-210",
  //     genderId: 1,
  //   },
  //   update: {},
  // });
}

async function main() {
  // await seedGenders();
  await seedRooms();
  // await seedUsers();
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
