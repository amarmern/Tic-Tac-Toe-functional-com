import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const style = {
  width: '200px',
  margin: '20px auto',
};

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClickSqaure = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    <button onClick={() => setBoard(Array(9).fill(null))}>start Game</button>;
  };

  return (
    <>
      <Board sqaures={board} handleClickSqaure={handleClickSqaure} />
      <div style={style}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
