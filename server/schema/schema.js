import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { identities, habits } from "../mockDatabase/data.js";

const IdentityType = new GraphQLObjectType({
    name: 'Identity',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        habits: {
            type: new GraphQLList(HabitType),
            resolve: (parent, args) => (habits.filter(habit => parent.id === habit.identityId)),
        }
    }),
});

const HabitType = new GraphQLObjectType({
    name: 'Habit',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString},
        identityId: { type: GraphQLID },
        identity: {
            type: IdentityType,
            resolve: (parent, args) => (identities.find(identity => parent.identityId === identity.id))
        }
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        identities: {
            type: new GraphQLList(IdentityType),
            // TODO (Jason): Try to change resolve to arrow function
            resolve: (parent, args) => (identities),
        },
        identity: {
            type: IdentityType,
            args:{ id: { type: GraphQLID }},
            resolve: (parent, args) => (identities.find(identity => args.id === identity.id)),
        },
        habits: {
            type: new GraphQLList(HabitType),
            resolve: (parent, args) => (habits),
        },
        habit: {
            type: HabitType,
            args:{ id: { type: GraphQLID }},
            resolve: (parent, args) => (habits.find(habit => args.id === habit.id)),
        },
    }
});

export default new GraphQLSchema({
    query: RootQuery,
})