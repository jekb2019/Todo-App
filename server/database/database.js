import { MongoClient } from "mongodb";
import assert from "assert";

let database;
let habitCollection;
let identityCollection;
export async function connectDB() {
  const client = new MongoClient(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  database = await client.db("Todo");
  habitCollection = await database.collection("habits");
  // .insertMany([
  //     {id: '1', name:'Study coding', description: 'Watch coding tutorials', identityId: '1'},
  //     {id: '2', name:'Do side projects', identityId: '1'},
  //     {id: '3', name:'Eat healthy', description: 'No junk food!', identityId: '2'},
  //     {id: '4', name:'Be nice', description: 'Smile always', identityId: '3'}
  // ])
  identityCollection = await database.collection("identities");
  // .insertMany([
  //     {id: '1', name: 'Best developer', description: 'The best programmer in the world'},
  //     {id: '2', name: 'Healthy person', description: 'A person who is fit and healthy'},
  //     {id: '3', name: 'Kind person', description: 'A person who respects others'},
  //     {id: '4', name: 'Handsome man'}
  // ]);
}

function mapArrayToRemoveMongoId(identities) {
  return identities.map((identity) => {
    delete identity["_id"];
    return identity;
  });
}

// Identity
export async function addIdentity(identity) {
  identityCollection.insertOne(identity);
}

export async function getAllIdentities() {
  return await identityCollection
    .find()
    .toArray()
    .then(mapArrayToRemoveMongoId);
}

export async function getIdentityById(id) {
  return await identityCollection.find({ id }).next();
}

export async function removeIdentity(id) {
  await identityCollection.deleteOne({ id });
}

// Habit
export async function addHabit(habit) {
  const identity = await getIdentityById(habit.identityId);
  if (identity) {
    habitCollection.insertOne(habit);
  }
}

export async function getAllHabits() {
  return await habitCollection.find().toArray().then(mapArrayToRemoveMongoId);
}

export async function getHabitsWithIdentityId(identityId) {
  return await habitCollection
    .find({ identityId })
    .toArray()
    .then(mapArrayToRemoveMongoId);
}

export async function getHabitById(id) {
  return await habitCollection.find({ id }).next();
}

export async function removeHabit(id) {
  await habitCollection.deleteOne({ id });
}

export async function removeHabitsWithIdentityId(identityId) {
  await habitCollection.deleteMany({ identityId });
}
