import React, { useState } from "react";
import Board from "./Board";

const winner = (sqaures) => {
  const arrayMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  console.log(sqaures);
  for (var i = 0; i < arrayMatrix.length; i++) {
    const [a, b, c] = arrayMatrix[i];
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      console.log("winner: ", sqaures[a]);
      return sqaures[a];
    }
  }
  return null;
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXnext] = useState(true);
  const win = winner(squares);

  const onClickHandle = (i) => {
    console.log(i);
    if (squares[i] || win) return;
    const squaresCopy = [...squares];
    setXnext(!xNext);
    squaresCopy[i] = xNext ? "X" : "O";
    setSquares(squaresCopy);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="game">
      <Board squares={squares} onClick={onClickHandle} />
      <br />
      {win && <h2>Winner is: {win}</h2>}
      <button onClick={reset}>Reset </button>
    </div>
  );
};

export default Game;
