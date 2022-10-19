import React, { useState } from "react";
import Board from "../components/Board";
import Header from "../components/Header";


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
    console.log(count);
    if (count === 8 && !winner) {
      alert("Game over no winner for today.");
    }
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
    

    handleCheckWinner(squares);
    setCells(squares);
  }
  return (
    <div className="game">
      <Header />
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
