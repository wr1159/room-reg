import { RouterOutputs } from "~/utils/api";
import { Button } from "~/components/ui/button";

type Room = RouterOutputs["room"]["getRoom"];

type RoomCardProps = {
  room: Room;
};

const getRoomType = (room: Room) => {
  let result = "";
  result += room?.genderId == 1 ? "M" : "F";
  result += room?.isDouble ? "D" : "S";
  return result;
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Button
      className="flex h-16 min-h-[64px] w-20 min-w-[80px] flex-col px-2 py-1 text-xs"
      // variant={room?.occupant ? "outline" : "default"}
      disabled={room?.occupant ? true : false}
    >
      <span className="text-sm">{room?.name}</span>
      <span>{getRoomType(room)}</span>
      <span className="font-bold">{room?.occupant?.name}</span>
    </Button>
  );
}
