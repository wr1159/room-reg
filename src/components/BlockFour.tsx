import { RouterOutputs } from "~/utils/api";
import { Button } from "~/components/ui/button";
import RoomCard from "~/components/RoomCard";
import React from "react";
import GrassPatch from "./GrassPatch";
import RFResidence from "./RFResidence";
import LevelCard from "./LevelCard";
import Toilet from "./Toilet";
import Pantry from "./Pantry";
import Stairs from "./Stairs";
type Room = RouterOutputs["room"]["getRoom"];

const Male = {
  int: 1,
  description: "Male",
};
const Female = {
  int: 2,
  description: "Female",
};
const Alice = {
  id: 1,
  name: "Alice",
  genderId: 2,
  points: 100,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};
const room1 = {
  id: 1,
  occupantId: 1,
  name: "3-101",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  genderId: 1,
  gender: Male,
  occupant: Alice,
};

const Bob = {
  id: 2,
  name: "Bob",
  genderId: 1,
  points: 132,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};
const Charlie = {
  id: 3,
  name: "Charlie",
  genderId: 1,
  points: 130,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};
const David = {
  id: 4,
  name: "David",
  genderId: 1,
  points: 201,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};

const Eddy = {
  id: 5,
  name: "Eddy",
  genderId: 1,
  points: 55,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};

const room2 = {
  id: 2,
  occupantId: 2,
  name: "3-102",
  gender: Male,
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  genderId: 1,
  occupant: Bob,
};
const room3 = {
  id: 3,
  occupantId: 3,
  name: "3-103",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Male,
  genderId: 1,
  occupant: Charlie,
};

const room4 = {
  id: 4,
  occupantId: 4,
  name: "3-104",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Male,
  genderId: 1,
  occupant: David,
};

const room5 = {
  id: 5,
  occupantId: 5,
  name: "3-105",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Male,
  genderId: 1,
  occupant: Eddy,
};

const room6 = {
  id: 6,
  occupantId: 6,
  name: "3-106",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Male,
  genderId: 1,
  occupant: null,
};

const room7 = {
  id: 7,
  occupantId: 7,
  name: "3-107",
  isDouble: true,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Male,
  genderId: 2,
  occupant: null,
};

const femaleSingle = {
  id: 8,
  occupantId: null,
  name: "3-308",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Female,
  genderId: 2,
  occupant: null,
};
const BlockFour: React.FC = () => {
  // display columns of rooms
  return (
    <div className="flex gap-x-8 p-4">
      {/* Left column */}
      <div className="flex min-w-max gap-x-4">
        <div className="flex flex-col gap-y-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <div className="h-full" />
          <LevelCard level="3.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <div className="h-full" />
          <LevelCard level="2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Female" />
          <Stairs />
          <Pantry className="min-h-[128px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <div className="h-full" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="1" />
        </div>
      </div>
      {/* Middle Right Half */}
      <div className="flex-col space-y-2">
        <div className="flex gap-x-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <Stairs className="h-16" />
          <Toilet gender="Female" />
          <div className="w-full" />
          <LevelCard level="3" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="2.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <Stairs className="h-16" />
          <Toilet gender="Female" />
          <div className="w-full" />
          <LevelCard level="2" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="1.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <Stairs className="h-16" />
          <Toilet gender="Male" />
          <div className="w-full" />
          <LevelCard level="1" className="h-16" />
        </div>
        <div className="flex">
          <GrassPatch className="h-72 w-[500px]" />
          <RFResidence className="h-40 w-[340px]" />
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
