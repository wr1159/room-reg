import { useState } from "react";

import { Button } from "~/components/ui/button";

type SwitchBlocksProps = {
  blocks: string[];
  selectedBlock: string;
  handleSelectBlock: (block: string) => void;
};

export default function SwitchBlocks({
  blocks,
  selectedBlock,
  handleSelectBlock,
}: SwitchBlocksProps) {
  return (
    <div className="m-20 flex space-x-1">
      {blocks.map((block) => (
        <Button
          variant={block === selectedBlock ? "default" : "secondary"}
          className="inline"
          onClick={(e) => handleSelectBlock(block)}
        >
          {block}
        </Button>
      ))}
    </div>
  );
}
