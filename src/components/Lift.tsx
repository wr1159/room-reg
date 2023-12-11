import { Button } from "~/components/ui/button";
import { twMerge } from "tailwind-merge";
import { withClassname } from "./Stairs";

const Lift: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("w-[248px] border-2", className)}
      variant="outline"
      disabled
    >
      Lift 1 & Lift 2
    </Button>
  );
};

export default Lift;
