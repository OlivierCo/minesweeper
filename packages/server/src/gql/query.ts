import { GraphQLObjectType } from 'graphql'
import { generateGrid } from '../modules/grid/query'

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query schema definition',
  fields: {
    generateGrid,
  },
})
