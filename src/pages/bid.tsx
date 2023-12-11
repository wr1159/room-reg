import { useState } from "react";
import { api } from "~/utils/api";
import RoomCard from "~/components/RoomCard";
import Block from "~/components/Block";
import BidModal from "~/components/BidModal";
import BlockThree from "~/components/BlockThree";
import SwitchBlocks from "~/components/SwitchBlocks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

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
  const [selectedBlock, setSelectedBlock] = useState("2");
  const blocks = ["2", "3", "3A", "4", "5", "6", "7", "8"];

  const { data: rooms } = api.room.listRooms.useQuery();
  console.log(rooms);
  return (
    <>
      <main className="w-screen">
        <Tabs defaultValue="2" className="flex flex-col ">
          <TabsList className="mx-auto mb-4 w-fit">
            {blocks.map((block) => {
              return <TabsTrigger value={block}>Block {block}</TabsTrigger>;
            })}
          </TabsList>

          {blocks.map((block) => {
            return (
              <TabsContent value={block} className="bg-secondary min-w-fit">
                <Block blockNumber={block} />
              </TabsContent>
            );
          })}
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </main>
    </>
  );
  // return <>{rooms?.map((room) => <RoomCard key={room.id} room={room} />)}</>;
}
