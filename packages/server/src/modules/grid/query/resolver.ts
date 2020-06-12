import { getState, setState } from '../../../state'

interface Args {
  size: number
  mines: number
}

function generateGrid(state: any, size: number) {
  for (let i = 0; i < size; i++) {
    state[i] = []
    for (let j = 0; j < size; j++) {
      state[i][j] = { value: 0, revealed: false }
    }
  }

  return state
}

function addMines(state: any, mines: number, size: number) {
  for (let i = 0; i < mines; i++) {
    let row = Math.floor(Math.random() * size)
    let col = Math.floor(Math.random() * size)
    state[row][col] = { ...state[row][col], value: 9 }
  }

  return state
}

function applyNeighboursValue(state, i, j) {
  if (
    typeof state[i] !== 'undefined' &&
    typeof state[i][j] !== 'undefined' &&
    state[i][j].value !== 9
  ) {
    state[i][j].value += 1
  }
}

function addNeighbours(state: any) {
  const len = state.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (state[i][j].value === 9) {
        applyNeighboursValue(state, i - 1, j - 1)
        applyNeighboursValue(state, i - 1, j)
        applyNeighboursValue(state, i - 1, j + 1)
        applyNeighboursValue(state, i, j - 1)
        applyNeighboursValue(state, i, j + 1)
        applyNeighboursValue(state, i + 1, j - 1)
        applyNeighboursValue(state, i + 1, j)
        applyNeighboursValue(state, i + 1, j + 1)
      }
    }
  }

  return state
}

export const generateGridResolver = (args: Args, ctx: any) => {
  const state = getState()
  const { size, mines } = args

  generateGrid(state, size)
  addMines(state, mines, size)
  addNeighbours(state)
  setState(state)

  return getState()
}
