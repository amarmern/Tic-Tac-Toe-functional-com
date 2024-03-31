import React from 'react';

function Sqaure({ handleClickSqaure, value }) {
  console.log(value);
  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
  };
  return (
    <button style={style} onClick={handleClickSqaure}>
      {value}
    </button>
  );
}

export default Sqaure;
