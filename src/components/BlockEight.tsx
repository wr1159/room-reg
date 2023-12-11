import { RouterOutputs } from "~/utils/api";
import RoomCard from "~/components/RoomCard";
import React from "react";
import Toilet from "./Toilet";
import Pantry from "./Pantry";
import Stairs from "./Stairs";
import BBQPit from "./BBQPit";
import Lift from "./Lift";
import GenericRoom from "./GenericRoom";
type Room = RouterOutputs["room"]["getRoom"];

const Female = {
  int: 2,
  description: "Female",
};
const femaleSingle = {
  id: 8,
  occupantId: null,
  name: "7-308",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  gender: Female,
  genderId: 2,
  occupant: null,
};
const BlockEight: React.FC = () => {
  // display columns of rooms
  return (
    <div className="flex gap-x-10 gap-y-10 rounded-md p-4">
      {/* Level 5
      and
      Level 6 */}
      <div className="flex flex-col space-y-10">
        {/* Level 5 */}
        <div className="rounded-m flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 5</span>
            <div className="h-[168px]" />
            <div className="h-16" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Pantry className="h-16 w-20" />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 1"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Middle  Half */}
          <div className="flex-col space-y-1">
            <div className="h-16" />
            <div className="h-[68px]" />
            <BBQPit />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Lift className="h-16" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-col space-y-1">
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 2"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Toilet gender="Female" className="h-16" />
              <div className="w-20" />
              <Pantry className="h-16 w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
        </div>
        {/* Level 6 */}
        <div className="rounded-m flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 6</span>
            <div className="h-[168px]" />
            <div className="h-16" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Pantry className="h-16 w-20" />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 1"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Middle  Half */}
          <div className="flex-col space-y-1">
            <div className="h-16" />
            <div className="h-[68px]" />
            <BBQPit />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Lift className="h-16" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-col space-y-1">
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 2"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Toilet gender="Female" className="h-16" />
              <div className="w-20" />
              <Pantry className="h-16 w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
        </div>
      </div>

      {/* Level 7 
      and
       Level 8 */}
      <div className="flex flex-col space-y-10">
        {/* Level 7 */}
        <div className="rounded-m flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 7</span>
            <div className="h-[168px]" />
            <div className="h-16" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Pantry className="h-16 w-20" />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 1"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Middle  Half */}
          <div className="flex-col space-y-1">
            <div className="h-16" />
            <div className="h-[68px]" />
            <BBQPit />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Lift className="h-16" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-col space-y-1">
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 2"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Toilet gender="Female" className="h-16" />
              <div className="w-20" />
              <Pantry className="h-16 w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
        </div>
        {/* Level 8 */}
        <div className="rounded-m flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 8</span>
            <div className="h-[168px]" />
            <div className="h-16" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Pantry className="h-16 w-20" />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 1"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Middle  Half */}
          <div className="flex-col space-y-1">
            <div className="h-16" />
            <div className="h-[68px]" />
            <BBQPit />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Lift className="h-16" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-col space-y-1">
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <Toilet gender="Female" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 2"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Toilet gender="Female" className="h-16" />
              <div className="w-20" />
              <Pantry className="h-16 w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockEight;
