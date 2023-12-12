import { useState } from "react";
import { api } from "~/utils/api";
import Block from "~/components/Block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Bid() {
  const [selectedBlock, setSelectedBlock] = useState("2");

  const blocks = ["2", "3", "3A", "4", "5", "6", "7", "8"];

  const { data: rooms } = api.room.listRooms.useQuery();
  console.log(rooms);
  return (
    <>
      <main className="max-h-screen w-screen">
        <Tabs defaultValue="2" className="flex flex-col">
          <div className="max-w-screen overflow-scroll sm:mx-auto sm:overflow-auto ">
            <TabsList className=" ">
              {blocks.map((block) => {
                return (
                  <TabsTrigger
                    key={block}
                    value={block}
                    onClick={() => setSelectedBlock(block)}
                  >
                    Block {block}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {blocks.map((block) => {
            return (
              <TabsContent
                key={block}
                value={block}
                className="max-w-screen h-full max-h-screen overflow-scroll bg-secondary"
              >
                <Block blockNumber={block} />
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </>
  );
  // return <>{rooms?.map((room) => <RoomCard key={room.id} room={room} />)}</>;
}
