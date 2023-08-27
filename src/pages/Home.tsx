import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Let's play some Tic Tac Toe!</h2>
      <Link to="/players">
        <button>Press to start</button>
      </Link>
    </>
  );
};
