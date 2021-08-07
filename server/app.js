import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js'
import { MongoClient } from 'mongodb';
import assert from 'assert';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use('/data', graphqlHTTP({
    schema,
    graphiql: true, // Remove when deploying
}));

app.listen(port, () => {console.log(`Server listening on port ${process.env.PORT}`)});

const uri = process.env.HOST
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(client);
client.connect(err => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});