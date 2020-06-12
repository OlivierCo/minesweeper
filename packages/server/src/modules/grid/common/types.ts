import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql'

const GraphQLCell = new GraphQLList(
  new GraphQLObjectType({
    name: 'GraphQLCell',
    fields: {
      value: { type: GraphQLInt },
      revealed: { type: GraphQLBoolean },
    },
  }),
)

export const GraphQLGrid = new GraphQLList(GraphQLCell)
