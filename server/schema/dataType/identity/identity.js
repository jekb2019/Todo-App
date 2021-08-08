import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { getHabitsWithIdentityId } from "../../../database/database.js";
import HabitType from '../habit/habit.js'

const IdentityType = new GraphQLObjectType({
    name: 'Identity',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        habits: {
            type: new GraphQLList(HabitType),
            resolve: (parent, args) => getHabitsWithIdentityId(parent.id)
        }
    }),
});

export default IdentityType;