import "../Home/Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="big_container">
      <div className="small_container">
        <div className="text_container">
          <h2>Let's play some Tic Tac Toe!</h2>
        </div>
        <div className="btn_container">
          <Link to="/players">
            <button className="btn">Press to start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
