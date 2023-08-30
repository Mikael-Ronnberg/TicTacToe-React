import { useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { PlayerDispatchContext } from "../contexts/PlayerDispatchContext";
import { ActionType } from "../reducers/GameReducer";

export const Board = () => {
  const allPlayers = useContext(PlayerContext);
  const dispatch = useContext(PlayerDispatchContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState<string>("");

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.flat().every((cell) => cell !== "");
  };

  const makeMove = (x: number, y: number) => {
    if (winner || board[x][y] !== "") return;

    const current = allPlayers[currentPlayerIndex];

    const updatedBoard = [...board];
    updatedBoard[x][y] = current.character;
    setBoard(updatedBoard);

    const win = calculateWinner(board.flat());
    if (win) {
      const updatedPlayers = [...allPlayers];
      const currentPlayer = updatedPlayers[currentPlayerIndex];
      currentPlayer.score++;
      dispatch({
        type: ActionType.UPDATE_PLAYERS,
        payload: JSON.stringify(updatedPlayers),
      });

      // setPlayers(updatedPlayers);
      setWinner(currentPlayer.name);
    } else if (isBoardFull()) {
      setWinner("tie");
    } else {
      setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % allPlayers.length);
    }
  };

  const resetGame = () => {
    setWinner("");
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayerIndex(0);
  };

  const startOver = () => {};

  const showHighScore = () => {};

  return (
    <div>
      {allPlayers.length > 1 && (
        <div>
          <h2>{allPlayers[currentPlayerIndex].name}'s turn</h2>
          <div>{}</div>
          <div>
            {winner && <h2>{winner} wins!</h2>}
            {!winner && isBoardFull() && <h2>It's a tie!</h2>}
            <button onClick={resetGame}>Reset Game</button>
            <button onClick={startOver}>Start Over</button>
            <button onClick={showHighScore}>Show High Score</button>
          </div>
        </div>
      )}
    </div>
  );
};
