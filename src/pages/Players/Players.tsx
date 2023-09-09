import "../Players/Players.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlayerDispatchContext } from "../../contexts/PlayerDispatchContext";
import { ActionType } from "../../reducers/GameReducer";

export const Players = () => {
  const dispatch = useContext(PlayerDispatchContext);
  const [playerOneInput, setPlayerOneInput] = useState("");
  const [playerTwoInput, setPlayerTwoInput] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = () => {
    if (show && playerOneInput.length > 2) {
      console.log(playerOneInput);
      dispatch({ type: ActionType.ADD_PLAYER_ONE, payload: playerOneInput });

      setPlayerOneInput("");
      setShow(false);
    } else if (!show && playerTwoInput.length > 2) {
      dispatch({ type: ActionType.ADD_PLAYER_TWO, payload: playerTwoInput });
      setPlayerTwoInput("");
      setShow(true);
    }
  };

  return (
    <div className="main_container">
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
          <div className="btn_container">
            <button onClick={handleSubmit}>Next</button>
          </div>
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

      {show ? null : (
        <div className="btn_container">
          <Link to="/board">
            <button onClick={handleSubmit}>Start game!</button>
          </Link>
        </div>
      )}
    </div>
  );
};
