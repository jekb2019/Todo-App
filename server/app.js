import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js'

const app = express();

const port = 8080;

app.use(express.json());

app.use('/data', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, () => {console.log(`Server listening on port ${process.env.PORT}`)});