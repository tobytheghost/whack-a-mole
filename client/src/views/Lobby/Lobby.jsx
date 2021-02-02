import React, { useState, useEffect } from "react";
import axios from "axios";
import { actionTypes } from "../../context/Reducer";
import { useContextState } from "../../context/StateProvider";

const Lobby = () => {
  const [, dispatch] = useContextState();
  const [scores, setScores] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const handleStartGame = () => {
    dispatch({
      type: actionTypes.SET_PLAYER_NAME,
      payload: {
        playerName,
      },
    });
  };

  useEffect(() => {
    const getScores = async () => {
      const response = await axios.get(`http://localhost:3001/scores`);

      if (response.status !== 200) {
        return;
      }

      console.log(response.data);
      setScores(response.data);
    };

    getScores();
  }, [setScores]);

  return (
    <div className="lobby">
      {scores && scores.length && (
        <div className="scoreboard">
          Leaderboard
          {scores
            .sort((a, b) => {
              return b.score - a.score;
            })
            .map((score) => {
              return (
                <div
                  key={score.playerName + score.score}
                  className="scoreboard__name"
                >
                  {score.playerName} - {score.score}
                </div>
              );
            })}
        </div>
      )}

      <hr />

      <label>
        <span className="lobby__input-title">Your Name</span>
        <input
          className="lobby__input"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>
      <button className="lobby__button" onClick={handleStartGame}>
        Start
      </button>
    </div>
  );
};

export default Lobby;
