import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  console.log(cells);

  const handleClick = (num) => {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)} className="table_data">
        -
      </td>
    );
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TicTacToe;
