import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GameDispatchContext } from "../contexts/PlayerDispatchContext";
import { ActionType } from "../reducers/GameReducer";

export const Players = () => {
  const dispatch = useContext(GameDispatchContext);
  const [playerOneInput, setPlayerOneInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: ActionType.ADD_PLAYER, payload: playerOneInput });

    setPlayerOneInput("");
  };
  const [show, setShow] = useState(true);

  return show ? (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter name for player 1</h3>
        <input
          type="text"
          value={playerOneInput}
          onChange={(e) => {
            setPlayerOneInput(e.target.value);
          }}
        />
      </form>
      <button onClick={() => setShow(false)}>Next</button>
    </div>
  ) : (
    <div>
      <h3>Enter name for player 2</h3>
      <input type="text" />
      <Link to="/board">
        <button>Start game!</button>
      </Link>
    </div>
  );
};
