// import './Game.css'
import Board from "./Board/Board";
import Timer from "./Timer";
import { useEffect, useState } from "react";
function Game(props) {
  const [winnerMessage, setWinnerMessage] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [seconds, setSeconds] = useState(30);

  const getWinner = (winner) => {
    if (winner) {
      setWinnerMessage(`The Winner is ${winner}`);
    }
  };

  const handleRest = () => {
    let newarr = squares.map((s) => (s = null));
    setSquares(newarr);
    setWinnerMessage("");
  };
  console.log(TimeRanges);
  return (
    <div className="game">
      <Timer
        setSeconds={setSeconds}
        seconds={seconds}
        winnerMessage={winnerMessage}
      />
      <div className="game-board">
        <Board
          getWinner={getWinner}
          winnerMessage={winnerMessage}
          squares={squares}
          setSquares={setSquares}
          setSeconds={setSeconds}
          seconds={seconds}
        />
      </div>
      <div className="game-info">
        <div>{winnerMessage}</div>
      </div>
      <button onClick={() => handleRest()}>reset</button>
    </div>
  );
}
export default Game;
