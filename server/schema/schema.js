import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { v4 as uuid } from "uuid";
import IdentityType from "./dataType/identity/identity.js";
import HabitType from "./dataType/habit/habit.js";
import {
  addHabit,
  addIdentity,
  getIdentityById,
  getAllHabits,
  getAllIdentities,
  getHabitById,
  removeIdentity,
  removeHabit,
  getHabitsWithIdentityId,
  removeHabitsWithIdentityId,
} from "../database/database.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    identities: {
      type: new GraphQLList(IdentityType),
      resolve: (parent, args) => getAllIdentities(),
    },
    identity: {
      type: IdentityType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => getIdentityById(args.id),
    },
    habits: {
      type: new GraphQLList(HabitType),
      resolve: (parent, args) => getAllHabits(),
    },
    habit: {
      type: HabitType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => getHabitById(args.id),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add identity
    addIdentity: {
      type: IdentityType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const { name, description } = args;
        // Check if name is given
        if (!name) {
          return;
        }
        // Create new Identity
        let newIdentity = { id: uuid(), name, description };

        // Insert to DB
        addIdentity(newIdentity);
        return newIdentity;
      },
    },
    // Delete identity
    deleteIdentity: {
      type: new GraphQLList(IdentityType),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        removeIdentity(args.id);
        removeHabitsWithIdentityId(args.id);
        return getAllIdentities();
      },
    },
    // Add habit
    addHabit: {
      type: HabitType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        identityId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        const { name, description, identityId } = args;
        // Check if name and identityID is given
        if (!name || !identityId) {
          return;
        }
        let newHabit = { id: uuid(), name, description, identityId };
        addHabit(newHabit);
        return newHabit;
      },
    },
    // Delete habit
    deleteHabit: {
      type: new GraphQLList(HabitType),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        removeHabit(args.id);
        return getAllHabits();
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
