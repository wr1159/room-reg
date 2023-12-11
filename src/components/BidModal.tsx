import React, { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api, RouterOutputs } from "~/utils/api";

type Room = RouterOutputs["room"]["getRoom"];

type BidModalProps = {
  room: Room;
  children: ReactNode;
};

const BidModal: React.FC<BidModalProps> = ({ room, children }) => {
  const roomMutation = api.bid.bidRoom.useMutation();
  const handleSubmitBid = () => {
    roomMutation.mutate({
      userId: 1,
      roomId: room?.id as number,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Bid for room ${room?.name}`}</DialogTitle>
          <DialogDescription>
            Are you sure you want to bid for this room?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={handleSubmitBid}>Submit bid</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BidModal;
