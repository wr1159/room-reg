import { Button } from "~/components/ui/button";
import { twMerge } from "tailwind-merge";

export interface withClassname {
  className?: string;
}
const Stairs: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("h-10 w-20 border-2", className)}
      variant="outline"
      disabled
    >
      Stairs
    </Button>
  );
};

export default Stairs;
