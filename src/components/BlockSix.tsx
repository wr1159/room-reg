import { RouterOutputs } from "~/utils/api";
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

export default BlockSix;
