import { Button } from "~/components/ui/button";
import { withClassname } from "~/components/Stairs";
import { twMerge } from "tailwind-merge";

const GrassPatch: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("h-80 border-2 bg-[#96e68c]", className)}
      variant="outline"
      disabled
    >
      Grass Patch
    </Button>
  );
};

export default GrassPatch;
