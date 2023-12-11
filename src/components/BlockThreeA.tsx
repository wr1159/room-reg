import { RouterOutputs } from "~/utils/api";
import RoomCard from "~/components/RoomCard";
import React from "react";
import GrassPatch from "./GrassPatch";
import LevelCard from "./LevelCard";
import Pantry from "./Pantry";
type Room = RouterOutputs["room"]["getRoom"];

const Female = {
  int: 2,
  description: "Female",
};
const femaleSingle = {
  id: 3,
  occupantId: null,
  name: "5-317",
  isDouble: false,
  gender: Female,
  genderId: 2,
  occupant: null,
};
const BlockThreeA: React.FC = () => {
  // display columns of rooms
  return (
    <div className="mx-auto flex gap-x-1 p-4">
      {/* Left column */}
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-1">
          <LevelCard level="4" className="h-16" />
          <div className="w-20" />
          <div className="w-20" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="3" className="h-16" />
          <div className="w-20" />
          <div className="w-20" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="2" className="h-16" />
          <div className="w-20" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="1" className="h-16" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
        </div>
        <div className="flex gap-x-1">
          <div className="w-20" />
          <GrassPatch className="h-[380px] w-[420px]" />
        </div>
      </div>
      {/* Right Column */}
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-y-2">
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <div className="flex flex-col gap-y-1">
            <RoomCard room={femaleSingle} />
            <RoomCard room={femaleSingle} />
            <RoomCard room={femaleSingle} />
            <RoomCard room={femaleSingle} />
            <RoomCard room={femaleSingle} />
            <LevelCard level="1" />
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[284px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <Pantry className="h-[132px]" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[284px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[284px]" />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <RoomCard room={femaleSingle} />
          <LevelCard level="4" />
        </div>
      </div>
    </div>
  );
};

export default BlockThreeA;
