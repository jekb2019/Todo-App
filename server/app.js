import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import dotenv from "dotenv";
import { addHabit, connectDB } from "./database/database.js";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(
  "/data",
  graphqlHTTP({
    schema,
    graphiql: true, // TODO(Jason): Remove when deploying
  })
);

// If connection to DB is successful, then listen
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch(console.error);
