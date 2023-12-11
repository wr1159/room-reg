import { api } from "~/utils/api";
import RoomCard from "~/components/RoomCard";

export default function Bid() {
  const { data: rooms } = api.room.listRooms.useQuery();
  return <>{rooms?.map((room) => <RoomCard key={room.id} room={room} />)}</>;
}
