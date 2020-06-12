import { GraphQLInt, GraphQLNonNull } from 'graphql'
import { GraphQLGrid } from '../common/types'
import { clearOfMinesResolver, IArgs } from './resolver'

export const clearOfMines = {
  type: GraphQLGrid,
  description: 'Clear a mines or die',
  args: {
    row: {
      name: 'row',
      type: new GraphQLNonNull(GraphQLInt),
    },
    column: {
      name: 'column',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (source: any, args: IArgs, ctx: any) => clearOfMinesResolver(args),
}
