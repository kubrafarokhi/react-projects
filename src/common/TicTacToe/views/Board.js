import React from "react";
import Square from "./Square";
import './board.css';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares &&
        squares.map((square, idx) => {
          return (
            <Square key={idx} value={square} onClick={(i) => onClick(idx)} />
          );
        })}
    </div>
  );
};

export default Board;