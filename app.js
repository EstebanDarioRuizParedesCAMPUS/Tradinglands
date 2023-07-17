import Server from "./server/server.js";
import Dotenv from "dotenv";

Dotenv.config()

const server = new Server
server.listen()
server.databaseCnx()