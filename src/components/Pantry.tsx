import { Button } from "~/components/ui/button";
import { twMerge } from "tailwind-merge";

export interface withClassname {
  className?: string;
}
const Pantry: React.FC<withClassname> = ({ className }) => {
  return (
    <Button
      className={twMerge("h-32 w-20 border-2", className)}
      variant="outline"
      disabled
    >
      Pantry
    </Button>
  );
};

export default Pantry;
