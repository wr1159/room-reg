import React from "react";
import { api } from "~/utils/api";

const QueuePage: React.FC = () => {
  const {
    data: highestUnoccupiedPoints,
    refetch: refetchHighestUnoccupiedPoints,
  } = api.user.getHighestUnoccupiedPoints.useQuery();

  return (
    <div className="ring-primary-light flex h-screen items-center justify-center bg-gradient-to-r from-slate-300 to-slate-100 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] ring-2">
      <h1 className="glow mb-12 text-center text-7xl font-bold text-primary  drop-shadow-md">
        <span className="text-5xl">Current Queue Number:</span>
        <br />
        <span>{highestUnoccupiedPoints}</span>
      </h1>
    </div>
  );
};

export default QueuePage;
