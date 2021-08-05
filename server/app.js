import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();

const port = 8080;

app.use(express.json());

app.use('/', (req, res) => {
    res.json('Hi');
});

app.listen(port, () => {console.log(`Server listening on port ${process.env.PORT}`)});