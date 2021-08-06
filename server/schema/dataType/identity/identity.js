import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import HabitType from '../habit/habit.js'

const IdentityType = new GraphQLObjectType({
    name: 'Identity',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        habits: {
            type: new GraphQLList(HabitType),
            resolve: (parent, args) => (habits.filter(habit => parent.id === habit.identityId)),
        }
    }),
});

export default IdentityType;