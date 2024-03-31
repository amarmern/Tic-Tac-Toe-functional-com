import React from 'react';
import Sqaure from './Sqaure';

function Board({ sqaures, handleClickSqaure }) {
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  };
  return (
    <div style={style}>
      {sqaures.map((square, i) => (
        <Sqaure
          key={i}
          value={square}
          handleClickSqaure={() => handleClickSqaure(i)}
        />
      ))}
    </div>
  );
}

export default Board;
