import { RouterOutputs } from "~/utils/api";
import { Button } from "~/components/ui/button";

type Room = RouterOutputs["room"]["getRoom"];

type RoomCardProps = {
  room: Room;
};
export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Button
      className="flex h-fit min-h-[66px] flex-col py-2"
      variant={room?.occupant ? "outline" : "default"}
      disabled={room?.occupant ? true : false}
    >
      <span className="text-lg">{room?.name}</span>
      <span>{room?.occupant?.name}</span>
    </Button>
  );
}
