import { Button } from "~/components/ui/button";
import { withClassname } from "~/components/Stairs";
import { twMerge } from "tailwind-merge";

const HardCourt: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("h-80 border-2", className)}
      variant="outline"
      disabled
    >
      Hard Court
    </Button>
  );
};

export default HardCourt;
