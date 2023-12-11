import { RouterOutputs } from "~/utils/api";
type Room = RouterOutputs["room"]["getRoom"];

type RoomCardProps = {
  room: Room;
};
export default function RoomCard({ room }: RoomCardProps) {
  return <></>;
}
