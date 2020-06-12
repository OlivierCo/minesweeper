import { GraphQLObjectType } from 'graphql'
import { clearOfMines } from '../modules/grid/mutation'

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation schema definition',
  fields: {
    clearOfMines,
  },
})
