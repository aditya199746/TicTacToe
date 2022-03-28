import { useEffect, useState } from "react";
import Square from "./Square/Square";
function Board(props) {
  const { squares, setSquares, seconds, setSeconds } = props;
  //   const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const calWinner = (is_xTurn) => {
    let turnValue = is_xTurn ? "0" : "X";

    if (
      squares[0] === turnValue &&
      squares[4] === turnValue &&
      squares[8] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[2] === turnValue &&
      squares[4] === turnValue &&
      squares[6] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[0] === turnValue &&
      squares[3] === turnValue &&
      squares[6] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[1] === turnValue &&
      squares[4] === turnValue &&
      squares[7] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[2] === turnValue &&
      squares[5] === turnValue &&
      squares[8] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[0] === turnValue &&
      squares[1] === turnValue &&
      squares[2] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[3] == turnValue &&
      squares[4] == turnValue &&
      squares[5] == turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
    if (
      squares[6] === turnValue &&
      squares[7] === turnValue &&
      squares[8] === turnValue
    ) {
      props.getWinner(turnValue);
      return;
    }
  };
  useEffect(() => {
    calWinner(xTurn);
  }, [squares, xTurn]);
  useEffect(() => {
    if (seconds == 0) {
      setXTurn((turn) => !turn);
    }
  }, [seconds]);
  const handleClick = (i) => {
    if (props.winnerMessage === "") {
      if (squares[i] === null) {
        setXTurn((turn) => !turn);
        const square = squares.slice();
        if (xTurn || seconds == 0) {
          square[i] = "X";
          setSeconds(30);
        } else {
          square[i] = "0";
          setSeconds(30);
        }
        setSquares(square);
      } else {
        alert("Cant update the filled block");
      }
    } else {
      alert("please reset and start fresh");
    }
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const status = `Next player: ${xTurn ? "X" : "0"}`;

  return (
    <>
      <div className="status">{status}</div>
      <tr>
        <td>{renderSquare(0)}</td>
        <td>{renderSquare(1)}</td>
        <td>{renderSquare(2)}</td>
      </tr>
      <tr>
        <td>{renderSquare(3)}</td>
        <td>{renderSquare(4)}</td>
        <td>{renderSquare(5)}</td>
      </tr>
      <tr>
        <td>{renderSquare(6)}</td>
        <td>{renderSquare(7)}</td>
        <td>{renderSquare(8)}</td>
      </tr>
    </>
  );
}
export default Board;
