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

const Female = {
  int: 2,
  description: "Female",
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
const BlockSix: React.FC = () => {
  // display columns of rooms
  const { data: rooms } = api.room.listRooms.useQuery();
  return (
    <div className="flex gap-x-8 p-4">
      {/* Left column */}
      <div className="flex min-w-max gap-x-4">
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="6-309" />
          <RoomCard rooms={rooms} roomNumber="6-308" />
          <RoomCard rooms={rooms} roomNumber="6-307" />
          <RoomCard rooms={rooms} roomNumber="6-306" />
          <div className="h-full" />
          <LevelCard level="3.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="6-305" />
          <RoomCard rooms={rooms} roomNumber="6-304" />
          <RoomCard rooms={rooms} roomNumber="6-303" />
          <RoomCard rooms={rooms} roomNumber="6-302" />
          <RoomCard rooms={rooms} roomNumber="6-301" />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="6-209" />
          <RoomCard rooms={rooms} roomNumber="6-208" />
          <RoomCard rooms={rooms} roomNumber="6-207" />
          <RoomCard rooms={rooms} roomNumber="6-206" />
          <div className="h-full" />
          <LevelCard level="2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Female" />
          <Stairs />
          <Pantry className="min-h-[128px]" />
          <RoomCard rooms={rooms} roomNumber="6-203" />
          <RoomCard rooms={rooms} roomNumber="6-202" />
          <RoomCard rooms={rooms} roomNumber="6-201" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="6-109" />
          <RoomCard rooms={rooms} roomNumber="6-108" />
          <RoomCard rooms={rooms} roomNumber="6-107" />
          <RoomCard rooms={rooms} roomNumber="6-106" />
          <div className="h-full" />
          <LevelCard level="1.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="6-105" />
          <RoomCard rooms={rooms} roomNumber="6-104" />
          <RoomCard rooms={rooms} roomNumber="6-103" />
          <RoomCard rooms={rooms} roomNumber="6-102" />
          <RoomCard rooms={rooms} roomNumber="6-101" />
          <LevelCard level="1" />
        </div>
      </div>
      {/* Middle Right Half */}
      <div className="flex-col space-y-2">
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="6-311" />
          <RoomCard rooms={rooms} roomNumber="6-312" />
          <RoomCard rooms={rooms} roomNumber="6-313" />
          <RoomCard rooms={rooms} roomNumber="6-314" />
          <RoomCard rooms={rooms} roomNumber="6-315" />
          <RoomCard rooms={rooms} roomNumber="6-316" />
          <Stairs className="h-16" />
          <Toilet gender="Female" />
          <div className="w-full" />
          <LevelCard level="3" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard rooms={rooms} roomNumber="6-317" />
          <RoomCard rooms={rooms} roomNumber="6-318" />
          <RoomCard rooms={rooms} roomNumber="6-319" />
          <RoomCard rooms={rooms} roomNumber="6-320" />
          <LevelCard level="2.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="6-211" />
          <RoomCard rooms={rooms} roomNumber="6-212" />
          <RoomCard rooms={rooms} roomNumber="6-213" />
          <RoomCard rooms={rooms} roomNumber="6-214" />
          <RoomCard rooms={rooms} roomNumber="6-215" />
          <RoomCard rooms={rooms} roomNumber="6-216" />
          <Stairs className="h-16" />
          <Toilet gender="Female" />
          <div className="w-full" />
          <LevelCard level="2" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-[500px]" />
          <RoomCard rooms={rooms} roomNumber="6-217" />
          <RoomCard rooms={rooms} roomNumber="6-218" />
          <RoomCard rooms={rooms} roomNumber="6-219" />
          <RoomCard rooms={rooms} roomNumber="6-220" />
          <LevelCard level="1.5" className="h-16" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="6-111" />
          <RoomCard rooms={rooms} roomNumber="6-112" />
          <RoomCard rooms={rooms} roomNumber="6-113" />
          <RoomCard rooms={rooms} roomNumber="6-114" />
          <RoomCard rooms={rooms} roomNumber="6-115" />
          <RoomCard rooms={rooms} roomNumber="6-116" />
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

export default BlockSix;
