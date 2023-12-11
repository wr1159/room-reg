import { Button } from "~/components/ui/button";
import { twMerge } from "tailwind-merge";
import { withClassname } from "./Stairs";

export interface genericRoomProp extends withClassname {
  roomName: string;
}
const GenericRoom: React.FC<genericRoomProp> = ({ roomName, className }) => {
  return (
    <Button
      className={twMerge("max-w-20 h-16 w-20 border-2", className)}
      variant="outline"
      disabled
    >
      <span className="break-words">{roomName}</span>
    </Button>
  );
};

export default GenericRoom;
