import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import IdentityType from "../identity/identity.js";

const HabitType = new GraphQLObjectType({
    name: 'Habit',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString},
        identityId: { type: new GraphQLNonNull(GraphQLID) },
        identity: {
            type: new GraphQLNonNull(IdentityType),
            resolve: (parent, args) => (identities.find(identity => parent.identityId === identity.id))
        }
    }),
});

export default HabitType;