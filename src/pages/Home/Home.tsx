import "../Home/Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="big_container">
      <div className="small_container">
        <h2>Let's play some Tic Tac Toe!</h2>
        <Link to="/players">
          <button>Press to start</button>
        </Link>
      </div>
    </div>
  );
};
