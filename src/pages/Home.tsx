import { Link } from "react-router-dom";
import { PlayerDispatchContext } from "../contexts/PlayerDispatchContext";
import { PlayerContext } from "../contexts/PlayerContext";
import { useReducer } from "react";
import { GameReducer } from "../reducers/GameReducer";

export const Home = () => {
  const [allPlayers, dispatch] = useReducer(GameReducer, []);
  return (
    <>
      <PlayerContext.Provider value={allPlayers}>
        <PlayerDispatchContext.Provider value={dispatch}>
          <h2>Let's play some Tic Tac Toe!</h2>
          <Link to="/players">
            <button>Press to start</button>
          </Link>
        </PlayerDispatchContext.Provider>
      </PlayerContext.Provider>
    </>
  );
};
