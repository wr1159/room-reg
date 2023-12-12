import { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
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
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
};
const BlockThreeA: React.FC = () => {
  const { data: rooms } = api.room.listRooms.useQuery();
  // display columns of rooms
  return (
    <div className="mx-auto flex gap-x-1 p-4">
      {/* Left column */}
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-1">
          <LevelCard level="4" className="h-16" />
          <div className="w-20" />
          <div className="w-20" />
          <RoomCard rooms={rooms} roomNumber="3A-410" />
          <RoomCard rooms={rooms} roomNumber="3A-409" />
          <RoomCard rooms={rooms} roomNumber="3A-408" />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="3" className="h-16" />
          <div className="w-20" />
          <div className="w-20" />
          <RoomCard rooms={rooms} roomNumber="3A-310" />
          <RoomCard rooms={rooms} roomNumber="3A-309" />
          <RoomCard rooms={rooms} roomNumber="3A-308" />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="2" className="h-16" />
          <div className="w-20" />
          <RoomCard rooms={rooms} roomNumber="3A-210" />
          <RoomCard rooms={rooms} roomNumber="3A-209" />
          <RoomCard rooms={rooms} roomNumber="3A-208" />
          <RoomCard rooms={rooms} roomNumber="3A-207" />
        </div>
        <div className="flex gap-x-1">
          <LevelCard level="1" className="h-16" />
          <RoomCard rooms={rooms} roomNumber="3A-111" />
          <RoomCard rooms={rooms} roomNumber="3A-110" />
          <RoomCard rooms={rooms} roomNumber="3A-109" />
          <RoomCard rooms={rooms} roomNumber="3A-108" />
          <RoomCard rooms={rooms} roomNumber="3A-107" />
        </div>
        <div className="flex gap-x-1">
          <div className="w-20" />
          <GrassPatch className="h-[380px] w-[420px]" />
        </div>
      </div>
      {/* Right Column */}
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-y-2">
          <RoomCard rooms={rooms} roomNumber="3A-407" />
          <RoomCard rooms={rooms} roomNumber="3A-307" />
          <RoomCard rooms={rooms} roomNumber="3A-206" />
          <RoomCard rooms={rooms} roomNumber="3A-106" />
          <div className="flex flex-col gap-y-1">
            <RoomCard rooms={rooms} roomNumber="3A-105" />
            <RoomCard rooms={rooms} roomNumber="3A-104" />
            <RoomCard rooms={rooms} roomNumber="3A-103" />
            <RoomCard rooms={rooms} roomNumber="3A-102" />
            <RoomCard rooms={rooms} roomNumber="3A-101" />
            <LevelCard level="1" />
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[216px]" />
          <RoomCard rooms={rooms} roomNumber="3A-205" />
          <RoomCard rooms={rooms} roomNumber="3A-204" />
          <RoomCard rooms={rooms} roomNumber="3A-203" />
          <RoomCard rooms={rooms} roomNumber="3A-202" />
          <Pantry className="h-[132px]" />
          <LevelCard level="2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[216px]" />
          <RoomCard rooms={rooms} roomNumber="3A-306" />
          <RoomCard rooms={rooms} roomNumber="3A-305" />
          <RoomCard rooms={rooms} roomNumber="3A-304" />
          <RoomCard rooms={rooms} roomNumber="3A-303" />
          <RoomCard rooms={rooms} roomNumber="3A-302" />
          <RoomCard rooms={rooms} roomNumber="3A-301" />
          <LevelCard level="3" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-[216px]" />
          <RoomCard rooms={rooms} roomNumber="3A-406" />
          <RoomCard rooms={rooms} roomNumber="3A-405" />
          <RoomCard rooms={rooms} roomNumber="3A-404" />
          <RoomCard rooms={rooms} roomNumber="3A-403" />
          <RoomCard rooms={rooms} roomNumber="3A-402" />
          <RoomCard rooms={rooms} roomNumber="3A-401" />
          <LevelCard level="4" />
        </div>
      </div>
    </div>
  );
};

export default BlockThreeA;
