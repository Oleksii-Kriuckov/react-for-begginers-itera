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
        turn: 0,
        won: false
    }
    )
    const reset = () => {
        setState({
            matrix: createBattlefield(),
            turn: 0,
            won: false
        })
    };

    const fire = (y: number, x: number) => {
        const cell = state.matrix[y][x];

        if (cell === CHECKED_SHIP || cell === CHECKED_WATER) {
            return
        }
        const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
        state.matrix[y][x] = newState;
        const won = state.matrix.every((line) => line.every((x) => x !== SHIP));

        setState({ ...state, turn: state.turn + 1, won })
    };

    const { matrix, turn, won } = state;

    return { turn, reset, matrix, fire, won }
}