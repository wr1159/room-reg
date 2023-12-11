import { Button } from "~/components/ui/button";
import { withClassname } from "~/components/Stairs";
import { twMerge } from "tailwind-merge";

const BBQPit: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("h-32 w-[420px] border-2 bg-[#96e68c]", className)}
      variant="outline"
      disabled
    >
      BBQ Pit
    </Button>
  );
};

export default BBQPit;
