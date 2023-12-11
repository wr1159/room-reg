import { RouterOutputs } from "~/utils/api";
import BlockTwo from "./BlockTwo";
import BlockThree from "./BlockThree";
import BlockThreeA from "./BlockThreeA";
import BlockFour from "./BlockFour";
import BlockFive from "./BlockFive";
import BlockSix from "./BlockSix";
import BlockSeven from "./BlockSeven";
import GrassPatch from "./GrassPatch";
import BlockEight from "./BlockEight";
type Room = RouterOutputs["room"]["getRoom"];

interface BlockProps {
  blockNumber: string;
}

const Block: React.FC<BlockProps> = ({ blockNumber }) => {
  if (blockNumber == "2") {
    return <BlockTwo />;
  } else if (blockNumber == "3") {
    return <BlockThree />;
  } else if (blockNumber == "3A") {
    return <BlockThreeA />;
  } else if (blockNumber == "4") {
    return <BlockFour />;
  } else if (blockNumber == "5") {
    return <BlockFive />;
  } else if (blockNumber == "6") {
    return <BlockSix />;
  } else if (blockNumber == "7") {
    return <BlockSeven />;
  } else if (blockNumber == "8") {
    return <BlockEight />;
  } else {
    return <GrassPatch />;
  }
};

export default Block;
