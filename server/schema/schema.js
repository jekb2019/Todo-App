import { UserInputError } from "apollo-server-errors";
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { v4 as uuid } from 'uuid';
import IdentityType from './dataType/identity/identity.js';
import HabitType from './dataType/habit/habit.js';

let identities = [
    {id: '1', name: 'Best developer', description: 'The best programmer in the world'},
    {id: '2', name: 'Healthy person', description: 'A person who is fit and healthy'},
    {id: '3', name: 'Kind person', description: 'A person who respects others'},
    {id: '4', name: 'Handsome man'},
]

let habits = [
    {id: '1', name:'Study coding', description: 'Watch coding tutorials', identityId: '1'},
    {id: '2', name:'Do side projects', identityId: '1'},
    {id: '3', name:'Eat healthy', description: 'No junk food!', identityId: '2'},
    {id: '4', name:'Be nice', description: 'Smile always', identityId: '3'},
]

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        identities: {
            type: new GraphQLList(IdentityType),
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

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add identity
        addIdentity: {
            type: IdentityType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString}
            },
            resolve: (parent, args) => {
                const { name, description } = args;
                if(!name) {
                    return;
                }
                let newIdentity = { id: uuid() , name, description };
                identities = [newIdentity, ... identities];
                return newIdentity;
            },
        },
        // Delete identity
        deleteIdentity: {
            type: new GraphQLList(IdentityType),
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                // delete identity
                identities = identities.filter(identity => args.id !== identity.id)
                // delete related habits
                habits = habits.filter(habit => args.id !== habit.identityId);
                return identities;
            },
        },
        // Add habit
        addHabit: {
            type: HabitType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString},
                identityId: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                const { name, description, identityId } = args;
                if(!name || !identityId) {
                    return;
                }
                const relatedIdentity = identities.find(identity => args.identityId === identity.id);
                console.log(relatedIdentity);
                if (!relatedIdentity) {
                    throw new UserInputError("Invalid Identity Id");
                }
                let newHabit = { id: uuid() , name, description, identityId };
                habits = [newHabit, ... habits];
                return newHabit;
            },
        },
        // Delete habit
        deleteHabit: {
            type: new GraphQLList(HabitType),
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                habits = habits.filter(habit => args.id !== habit.id)
                return habits;
            },
        },
    }
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})