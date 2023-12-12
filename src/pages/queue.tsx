import React from "react";
import { api } from "~/utils/api";

const QueuePage: React.FC = () => {
  const { data: highestUnoccupiedPoints } =
    api.user.getHighestUnoccupiedPoints.useQuery();

  const { data: namesInBid } = api.user.getUsersByPoints.useQuery({
    points: highestUnoccupiedPoints || 0,
  });
  console.log(namesInBid);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="glow -mt-60 text-center text-7xl font-bold text-primary  drop-shadow-md">
        <span className="text-5xl">Current Point in Queue:</span>
        <br />
        <span>{highestUnoccupiedPoints}</span>
      </h1>
      <h2 className="glow mt-20 text-center text-7xl font-bold  text-primary drop-shadow-md">
        <span className="text-5xl">Names in Bid:</span>
        <br />
        {namesInBid?.map((name, index) => {
          return (
            <span>
              {name}
              {index !== namesInBid.length - 1 && ", "}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default QueuePage;
