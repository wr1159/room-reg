import { Button } from "~/components/ui/button";
import { withClassname } from "~/components/Stairs";
import { twMerge } from "tailwind-merge";

interface ToiletProps extends withClassname {
  gender: string;
}

const Toilet: React.FC<ToiletProps> = ({ gender, className }) => {
  return (
    <Button
      className={twMerge("flex h-fit w-20 flex-col border-2", className)}
      variant="outline"
      disabled
    >
      <span className="flex flex-col">{gender}</span>
      Toilet
    </Button>
  );
};

export default Toilet;
