import { getState, setState } from '../../../state'

export interface IArgs {
  row: number
  column: number
}

interface ICell {
  value: number
  revealed: boolean
}

function zero(x: number, y: number, state) {
  if (state[x][y].revealed) return

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        typeof state[i] !== 'undefined' &&
        typeof state[i][j] !== 'undefined' &&
        state[i][j].value === 0
      ) {
        state[i][j] = { ...state[i][j], revealed: true }
        zero(i, j, state)
      }
    }
  }
}

export const clearOfMinesResolver = ({ row, column }: IArgs) => {
  const state = getState()

  if (state[row][column].value === 9) {
    state.map((arr: [ICell]) => arr.map((obj: ICell) => (obj.revealed = true)))
  } else {
    zero(row, column, state)
    state[row][column] = { ...state[row][column], revealed: true }
  }

  setState(state)

  return getState()
}
