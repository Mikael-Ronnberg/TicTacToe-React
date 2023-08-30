import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlayerDispatchContext } from "../contexts/PlayerDispatchContext";
import { ActionType } from "../reducers/GameReducer";

export const Players = () => {
  const dispatch = useContext(PlayerDispatchContext);
  const [playerOneInput, setPlayerOneInput] = useState("");
  const [playerTwoInput, setPlayerTwoInput] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (show && playerOneInput.length > 2) {
      dispatch({ type: ActionType.ADD_PLAYER_ONE, payload: playerOneInput });
      setPlayerOneInput("");
    } else if (!show && playerTwoInput.length > 2) {
      dispatch({ type: ActionType.ADD_PLAYER_TWO, payload: playerTwoInput });
      setPlayerTwoInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {show ? (
          <>
            <h3>Enter name for player 1</h3>
            <input
              type="text"
              value={playerOneInput}
              onChange={(e) => {
                setPlayerOneInput(e.target.value);
              }}
            />
          </>
        ) : (
          <>
            <h3>Enter name for player 2</h3>
            <input
              type="text"
              value={playerTwoInput}
              onChange={(e) => {
                setPlayerTwoInput(e.target.value);
              }}
            />
          </>
        )}
        <button onClick={() => setShow(false)}>Next</button>
        {show ? null : (
          <Link to="/board">
            <button>Start game!</button>
          </Link>
        )}
      </form>
    </div>
  );
};
