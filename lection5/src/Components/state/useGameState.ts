import { useState } from 'react';

import { createArray } from "../utils/array";
import { createWarShip } from "../utils/battlefield";
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from './CellState';

const MAX_MATRIX_LENGTH = 10;

const createEmptyBattleField = () =>
    createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0)
    );

const createBattlefield = () => {
    const emptyBattlefield = createEmptyBattleField();
    const newWarShip = createWarShip(4, MAX_MATRIX_LENGTH);

    newWarShip.forEach(({ x, y }) => {
        emptyBattlefield[y][x] = SHIP;
    })
    return emptyBattlefield;
}

export const useGameState = () => {
    const [state, setState] = useState({
            matrix: createBattlefield(),
            turn: 0
        }
    )
    const reset = () => {
        setState({
            matrix: createBattlefield(),
            turn: 0
        })
    };
    const { matrix, turn } = state;
  const fire = (y: number, x: number) => {
      const cell = state.matrix[y][x];

      if (cell === CHECKED_SHIP || cell === CHECKED_WATER) {
          return
      }

      const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
      state.matrix[y][x] = newState;

      setState({...state, turn: state.turn +1})
  };
    
    return { turn, reset, matrix, fire}
}