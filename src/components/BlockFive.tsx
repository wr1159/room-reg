import { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
import RoomCard from "~/components/RoomCard";
import React from "react";
import HardCourt from "./HardCourt";
import LevelCard from "./LevelCard";
import Toilet from "./Toilet";
import Stairs from "./Stairs";
import Pantry from "./Pantry";
type Room = RouterOutputs["room"]["getRoom"];

const Female = {
  int: 2,
  description: "Female",
};

const femaleSingle = {
  id: 8,
  occupantId: null,
  name: "5-308",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Female,
  genderId: 2,
  occupant: null,
};
const BlockFive: React.FC = () => {
  const { data: rooms } = api.room.listRooms.useQuery();
  // display columns of rooms
  return (
    <div className="flex gap-x-1 p-4">
      {/* Left column */}
      <div className="flex min-w-max gap-x-4">
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-[268px]" />
          <LevelCard level="4.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-40" />
          <Toilet gender="Female" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="4" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-[268px]" />
          <LevelCard level="3.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-40" />
          <Toilet gender="Female" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-[268px]" />
          <LevelCard level="2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-40" />
          <Toilet gender="Female" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-[268px]" />
          <LevelCard level="1.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-40" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="1" />
        </div>
      </div>
      {/* Middle */}
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
        </div>
        <div className="flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
        </div>
        <div className="-mb-4 mt-2 flex gap-x-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
        </div>
        <HardCourt className="h-60" />
      </div>
      {/* Right Column */}
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-1">
          <div className="h-[160px]" />
          <Toilet gender="Male" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="1" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-full" />
          <LevelCard level="1.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Female" />
          <Stairs />
          <Pantry className="min-h-[128px]" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <div className="h-full" />
          <LevelCard level="2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-full" />
          <Toilet gender="Female" />
          <Stairs />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <RoomCard rooms={rooms} roomNumber="5-XYZ" />
          <LevelCard level="3" />
        </div>
      </div>
    </div>
  );
};

export default BlockFive;
