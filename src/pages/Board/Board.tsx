import "/Users/mikaelronnberg/Documents/GitHub Projects/TicTacToe-React/TicTacToe-React/src/pages/Board.css";

import { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { PlayerDispatchContext } from "../../contexts/PlayerDispatchContext";
import { ActionType } from "../../reducers/GameReducer";
import { Link } from "react-router-dom";

export const Board = () => {
  const allPlayers = useContext(PlayerContext);

  const dispatch = useContext(PlayerDispatchContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState<string>("");

  console.log(allPlayers);

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

  return (
    <div>
      {allPlayers.length > 1 && (
        <div>
          <h2>{allPlayers[currentPlayerIndex].name}'s turn</h2>
          <div className="board">
            {board.map((row, x) => (
              <div key={x}>
                {row.map((cell, y) => (
                  <div
                    key={y}
                    className="square"
                    onClick={() => makeMove(x, y)}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {winner && <h2>{winner} wins!</h2>}
            {!winner && isBoardFull() && <h2>It's a tie!</h2>}
            <button onClick={resetGame}>Reset Game</button>
            <Link to="/players">
              <button>Start Over</button>
            </Link>
            <Link to="/result">
              <button>Show High Score</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
