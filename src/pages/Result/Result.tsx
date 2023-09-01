import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

export const Result = () => {
  // const showHighScore = () => {};

  const allPlayers = useContext(PlayerContext);

  return (
    <>
      {allPlayers.map((player) => {
        <h3>{player.name}</h3>;
        <p>{player.score}</p>;
      })}
    </>
  );
};
