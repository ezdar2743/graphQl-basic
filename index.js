import { createServer } from "@graphql-yoga/node";
import { version } from "graphql";
const server = new createServer({});

server.start(() => console.log("start"));
