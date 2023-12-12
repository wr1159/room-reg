import { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
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
const BlockTwo: React.FC = () => {
  const { data: rooms } = api.room.listRooms.useQuery();
  console.log(rooms);
  // display columns of rooms
  return (
    <div className="flex gap-x-8 p-4">
      {/* Left column */}
      <div className="flex min-w-max gap-x-4">
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="2-309" />
          <RoomCard rooms={rooms} roomNumber="2-308" />
          <RoomCard rooms={rooms} roomNumber="2-307" />
          <RoomCard rooms={rooms} roomNumber="2-306" />
          <div className="h-full" />
          <LevelCard level="3.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="2-305" />
          <RoomCard rooms={rooms} roomNumber="2-304" />
          <RoomCard rooms={rooms} roomNumber="2-303" />
          <RoomCard rooms={rooms} roomNumber="2-302" />
          <RoomCard rooms={rooms} roomNumber="2-301" />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="2-209" />
          <RoomCard rooms={rooms} roomNumber="2-208" />
          <RoomCard rooms={rooms} roomNumber="2-207" />
          <RoomCard rooms={rooms} roomNumber="2-206" />
          <div className="h-full" />
          <LevelCard level="2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Female" />
          <Stairs />
          <Pantry className="min-h-[128px]" />
          <RoomCard rooms={rooms} roomNumber="2-203" />
          <RoomCard rooms={rooms} roomNumber="2-202" />
          <RoomCard rooms={rooms} roomNumber="2-201" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="2-109" />
          <RoomCard rooms={rooms} roomNumber="2-108" />
          <RoomCard rooms={rooms} roomNumber="2-107" />
          <RoomCard rooms={rooms} roomNumber="2-106" />
          <div className="h-full" />
          <LevelCard level="1.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="2-105" />
          <RoomCard rooms={rooms} roomNumber="2-104" />
          <RoomCard rooms={rooms} roomNumber="2-103" />
          <RoomCard rooms={rooms} roomNumber="2-102" />
          <RoomCard rooms={rooms} roomNumber="2-101" />
          <LevelCard level="1" />
        </div>
      </div>
      {/* Middle Right Half */}
      <div className="flex-col space-y-2">
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="2-311" />
          <RoomCard rooms={rooms} roomNumber="2-312" />
          <RoomCard rooms={rooms} roomNumber="2-313" />
          <RoomCard rooms={rooms} roomNumber="2-314" />
          <RoomCard rooms={rooms} roomNumber="2-315" />
          <RoomCard rooms={rooms} roomNumber="2-316" />
          <div className="w-full" />
          <LevelCard level="3" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard rooms={rooms} roomNumber="2-317" />
          <RoomCard rooms={rooms} roomNumber="2-318" />
          <RoomCard rooms={rooms} roomNumber="2-319" />
          <RoomCard rooms={rooms} roomNumber="2-320" />
          <LevelCard level="2.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="2-211" />
          <RoomCard rooms={rooms} roomNumber="2-212" />
          <RoomCard rooms={rooms} roomNumber="2-213" />
          <RoomCard rooms={rooms} roomNumber="2-214" />
          <RoomCard rooms={rooms} roomNumber="2-215" />
          <RoomCard rooms={rooms} roomNumber="2-216" />
          <Stairs className="h-16" />
          <Toilet gender="Female" />
          <div className="w-full" />
          <LevelCard level="2" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard rooms={rooms} roomNumber="2-217" />
          <RoomCard rooms={rooms} roomNumber="2-218" />
          <RoomCard rooms={rooms} roomNumber="2-219" />
          <RoomCard rooms={rooms} roomNumber="2-220" />
          <LevelCard level="1.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="2-111" />
          <RoomCard rooms={rooms} roomNumber="2-112" />
          <RoomCard rooms={rooms} roomNumber="2-113" />
          <RoomCard rooms={rooms} roomNumber="2-114" />
          <RoomCard rooms={rooms} roomNumber="2-115" />
          <RoomCard rooms={rooms} roomNumber="2-116" />
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

export default BlockTwo;
