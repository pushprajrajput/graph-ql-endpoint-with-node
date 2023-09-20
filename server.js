const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

//GraphQL schema
const schema = buildSchema(`
    type Query {
        message:String
    }
`);

//Schema Resolver
const root = {
  message: () => "Hello World",
};

//Create an express server and a GraphQL endpoint
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Hello, I am listening to 3000"));
