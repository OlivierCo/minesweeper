import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const CLEAR_OF_MINES_MUTATION = gql`
  mutation ClearOfMines($row: Int!, $column: Int!) {
    clearOfMines(row: $row, column: $column) {
      value
      revealed
    }
  }
`

export const useClearOfMinesMutation = () =>
  useMutation(CLEAR_OF_MINES_MUTATION)
