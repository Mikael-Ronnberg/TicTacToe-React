import "../Home/Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="main_container">
      <h2>Let's play some Tic Tac Toe!</h2>
      <div className="btn_container">
        <Link to="/players">
          <button className="btn">Press to start</button>
        </Link>
      </div>
    </div>
  );
};
