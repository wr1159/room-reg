import { Button } from "~/components/ui/button";
import { twMerge } from "tailwind-merge";

interface LevelCardProps {
  level: string;
  className?: string;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, className }) => {
  return (
    <Button
      className={twMerge("w-20 border-2", className)}
      variant="outline"
      disabled
    >
      Level {level}
    </Button>
  );
};

export default LevelCard;
