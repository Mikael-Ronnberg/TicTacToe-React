import "../Result/Result.css";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { Link } from "react-router-dom";

export const Result = () => {
  const allPlayers = useContext(PlayerContext);

  const getHighestPlayer = () => {
    return allPlayers.reduce((highest, player) => {
      return player.score > highest.score ? player : highest;
    }, allPlayers[0]);
  };

  const highestPlayer = getHighestPlayer();

  return (
    <div className="main_container">
      <div className="result_container">
        <h3>Highest Score:</h3>
        <p>{highestPlayer.name}</p>
        <p>{highestPlayer.score}</p>
      </div>
      <div className="result_container">
        <h3>Player Scores:</h3>
        {allPlayers.map((player) => (
          <div key={player.name}>
            <p>{player.name}</p>
            <p>{player.score}</p>
          </div>
        ))}
      </div>
      <div className="btn_container">
        <Link to="/board">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};
