import React from "react";
import { useContextState } from "../../context/StateProvider";

import "./Score.scss";

const Score = () => {
  const [
    {
      playerName,
      gameState: { score },
    },
  ] = useContextState();

  return (
    <div className="score">
      {playerName}'s Score: {score}
    </div>
  );
};

export default Score;
