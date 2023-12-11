import { RouterOutputs } from "~/utils/api";
import { Button } from "~/components/ui/button";
import RoomCard from "~/components/RoomCard";
type Room = RouterOutputs["room"]["getRoom"];

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
  genderId: 2,
  occupant: null,
};
export default function BlockThree() {
  // display columns of rooms
  return (
    <main className="flex">
      {/* Left column */}
      <div> </div>
      {/* Middle */}
      <div>
        <div className="flex gap-x-1">
          <RoomCard room={room1} />
          <RoomCard room={room2} />
          <RoomCard room={room3} />
          <RoomCard room={room4} />
          <RoomCard room={room5} />
          <RoomCard room={room6} />
        </div>
      </div>
      {/* Right Column */}
      <div> </div>
    </main>
  );
}
