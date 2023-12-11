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
const BlockSeven: React.FC = () => {
  // display columns of rooms
  return (
    <div className="flex gap-x-10 gap-y-10 rounded-md p-4">
      {/* Level 1
      and
      Level 2 */}
      <div className="flex flex-col gap-y-10">
        {/* Level 1 */}
        <div className="flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 1</span>
            <div className="h-[164px]" />
            <div className="h-16" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <GenericRoom roomName="Wire Centre" />
              <Pantry className="h-16 w-20" />
              <div className="w-20" />
              <Toilet gender="Male" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <GenericRoom
                roomName="Switch Room"
                className="break-word whitespace-pre-line"
              />
              <div className="w-20" />
              <GenericRoom
                roomName="Staircase 1"
                className="break-word whitespace-pre-line"
              />
            </div>
            <div className="flex gap-x-1">
              <div className="w-20" />
              <GenericRoom
                roomName={`Transformer Room`}
                className="break-word h-32 whitespace-pre-line"
              />
              <div className="w-20" />
              <div className="flex flex-col gap-y-1">
                <GenericRoom roomName="Store" />
                <GenericRoom
                  roomName="Cleaner's Room"
                  className="break-word whitespace-pre-line"
                />
              </div>
            </div>
          </div>
          {/* Middle  Half */}
          <div className="flex-col space-y-1">
            <div className="h-16" />
            <div className="h-16" />
            <BBQPit />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <Lift className="h-16" />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
            <div className="h-16" />
            <div className="flex gap-x-1">
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
              <RoomCard room={femaleSingle} />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-col space-y-1">
            <GenericRoom className="h-[196px] w-64" roomName="Lobby" />
            <div className="flex gap-x-1">
              <div className="w-20" />
              <Stairs className="h-16" />
            </div>
            <div className="flex gap-x-1">
              <Toilet gender="Male" />
              <div className="w-20" />
              <GenericRoom
                className="h-32 w-60"
                roomName="Kuok Conference Room"
              />
            </div>
            <div className="flex gap-x-1"></div>
          </div>
        </div>
        {/* Level 2 */}
        <div className="flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 2</span>
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
              <GenericRoom
                roomName="Residential Fellow's Flat"
                className="h-48 w-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Level 3 
      and
       Level 4 */}
      <div className="flex flex-col gap-y-10">
        {/* Level 3 */}
        <div className="flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 3</span>
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
              <GenericRoom
                roomName="Residential Fellow's Flat"
                className="h-48 w-60"
              />
            </div>
          </div>
        </div>
        {/* Level 4 */}
        <div className="flex gap-x-1 rounded-md border border-primary p-4">
          {/* Left column */}
          <div className="flex-col space-y-1">
            <span className="text-lg ">Level 4</span>
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

export default BlockSeven;
