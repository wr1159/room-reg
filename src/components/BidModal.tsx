import React, { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { toast } from "react-hot-toast";

type Room = RouterOutputs["room"]["getRoom"];

type BidModalProps = {
  room: Room;
  children: ReactNode;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BidModal: React.FC<BidModalProps> = ({
  room,
  children,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  const roomMutation = api.bid.bidRoom.useMutation();

  const handleSubmitBid = async () => {
    await roomMutation.mutate({
      userId: 1,
      roomId: room?.id as number,
    });

    if (roomMutation.isSuccess) {
      console.log(roomMutation.data);
      toast.success("Bid successfully submitted!");
      setIsDialogOpen(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} defaultOpen={false}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onCloseAutoFocus={() => setIsDialogOpen(false)}
      >
        <DialogHeader onClick={() => setIsDialogOpen(false)}>
          <DialogTitle>{`Bid for room ${room?.name}`}</DialogTitle>
          <DialogDescription>
            Are you sure you want to bid for this room?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => setIsDialogOpen(false)}
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleSubmitBid} type="submit">
            Submit bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BidModal;
