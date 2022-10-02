import React, { useState } from "react";
import Board from "../components/Board";
const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const TikTakToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [count, setCount] = useState(0);

  function handleResetGame() {
    setCells(Array(9).fill(""));
    setWinner();
  }

  function handleCheckWinner(squares) {
    console.log(squares);
    let bis = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let bi in bis) {
      bis[bi].forEach((value) => {
        // console.log(value)
        if (
          squares[value[0]] === "" ||
          squares[value[1]] === "" ||
          squares[value[2]] === ""
        ) {
        } else if (
          squares[value[0]] === squares[value[1]] &&
          squares[value[1]] === squares[value[2]]
        ) {
          setWinner(squares[value[0]]);
          setCount(0);
        }
      });
    }
  }

  function handleClick(num) {
    setCount((prev) => prev + 1);
    console.log(count);
    if (winner) return;
    if (cells[num] !== "") return alert("Already clicked");
    let squares = [...cells];
    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      setTurn("X");
      squares[num] = "O";
    }
    if (count > 8 && !winner) {
      alert("Game over no winner for today.");
    }

    handleCheckWinner(squares);
    setCells(squares);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          handleResetGame={handleResetGame}
          winner={winner}
          cells={cells}
          turn={turn}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default TikTakToe;
