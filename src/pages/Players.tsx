import { useState } from "react";
import { Link } from "react-router-dom";

export const Players = () => {
  const [show, setShow] = useState(true);

  return show ? (
    <div>
      <h3>Enter name for player 1</h3>
      <input type="text" />
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
