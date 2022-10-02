import React from 'react'

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': 'auto',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Board({ handleClick, cells, turn, winner, handleResetGame }) {
  function Square({ num }) {
    return (
      <div onClick={() => handleClick(num)}
        className="square"
        style={squareStyle}>{cells[num]}
      </div>
    );
  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{turn}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner ? winner +' Is the winner' : 'None'}</span></div>
      <button onClick={handleResetGame} style={buttonStyle}>{winner ? 'Start Again.' :'Reset'}</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square num={0} />
          <Square num={1} />
          <Square num={2} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square num={3} />
          <Square num={4} />
          <Square num={5} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square num={6} />
          <Square num={7} />
          <Square num={8} />
        </div>
      </div>
    </div>
  );
}
export default Board