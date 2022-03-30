import { createServer } from "@graphql-yoga/node";
import resolvers from "./graphql/resolvers";

// Create your server
const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Person {
        name: String!
        age: Int!
        gender: String!
      }
      type Query {
        people: [Person]!
        person(id: Int!): Person
      }
    `,
    resolvers,
  },
});
server.start();
