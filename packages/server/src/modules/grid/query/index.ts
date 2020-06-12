import { GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql'
import { generateGridResolver } from './resolver'
import { GraphQLGrid } from '../common/types'

export const generateGrid = {
  type: GraphQLGrid,
  description: 'Generate a grid with the columns, rows and mines',
  args: {
    size: {
      name: 'size',
      type: new GraphQLNonNull(GraphQLInt),
      defaultValue: 10,
    },
    mines: {
      name: 'mines',
      type: new GraphQLNonNull(GraphQLInt),
      defaultValue: 10,
    },
  },
  resolve: async (parent: any, args: any, ctx: any) =>
    generateGridResolver(args, ctx),
}
