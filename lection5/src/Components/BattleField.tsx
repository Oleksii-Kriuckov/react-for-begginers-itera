// import * as React from 'react'

import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "./state/CellState";


type CellProps = {
  value: number;
  handleClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

const cellStateMap = {
  [WATER]: '',
  [SHIP]: '',
  [CHECKED_WATER]: '🌊',
  [CHECKED_SHIP]: '🔥'
}

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
  <button className="cell" onClick={() => handleClick(y, x)}>
    {cellStateMap[value]}
    </button>
)}

type BattlefieldProps = {
  matrix: number[][];
  onFire: (y: number, x: number) => void;
};

export const BattleField = ({ matrix, onFire }: BattlefieldProps) => {
  return (
    <div className="battlefield">
      {matrix.map((line, lineNumber) => (
        <div className="line" key={lineNumber}>{
          line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={onFire}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
