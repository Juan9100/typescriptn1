import type { Express } from 'express';
import express from 'express';

import Server from "./server";

const app: Express = express();

const server = new Server(app);
server.startServer();
