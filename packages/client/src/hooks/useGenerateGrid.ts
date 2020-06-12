import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GENERATE_GRID_QUERY = gql`
  query GenerateGrid($size: Int, $mines: Int) {
    generateGrid(size: $size, mines: $mines) {
      value
      revealed
    }
  }
`

export const useGenerateGrid = (size: number, mines: number) =>
  useQuery(GENERATE_GRID_QUERY, {
    variables: {
      size,
      mines,
    },
  })
