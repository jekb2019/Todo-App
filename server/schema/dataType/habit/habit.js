import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { getIdentityById } from "../../../database/database.js";
import IdentityType from "../identity/identity.js";

const HabitType = new GraphQLObjectType({
  name: "Habit",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    identityId: { type: new GraphQLNonNull(GraphQLID) },
    identity: {
      type: new GraphQLNonNull(IdentityType),
      resolve: (parent, args) => getIdentityById(parent.identityId),
    },
  }),
});

export default HabitType;
