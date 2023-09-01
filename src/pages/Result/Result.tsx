import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

export const Result = () => {
  const allPlayers = useContext(PlayerContext);

  const getHighestPlayer = () => {
    return allPlayers.reduce((highest, player) => {
      return player.score > highest.score ? player : highest;
    }, allPlayers[0]);
  };

  const highestPlayer = getHighestPlayer();

  return (
    <div>
      <h3>Highest Score:</h3>
      <p>{highestPlayer.name}</p>
      <p>{highestPlayer.score}</p>

      <h3>Player Scores:</h3>
      {allPlayers.map((player) => (
        <div key={player.name}>
          <p>{player.name}</p>
          <p>{player.score}</p>
        </div>
      ))}
    </div>
  );
};
