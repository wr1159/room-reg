import { api } from "~/utils/api";
import RoomCard from "~/components/RoomCard";
import BlockThree from "~/components/BlockThree";

const room1 = {
  id: 1,
  occupantId: 1,
  name: "3-101",
  isDouble: false,
  createdAt: new Date(2020, 12, 10),
  updatedAt: new Date(2020, 12, 11),
  genderId: 2,
  occupant: {
    id: 1,
    name: "Alice",
    genderId: 2,
    points: 100,
    createdAt: new Date(2020, 12, 10),
    updatedAt: new Date(2020, 12, 11),
  },
};
export default function Bid() {
  const { data: rooms } = api.room.listRooms.useQuery();
  console.log(rooms);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <BlockThree />
      </main>
    </>
  );
  // return <>{rooms?.map((room) => <RoomCard key={room.id} room={room} />)}</>;
}
