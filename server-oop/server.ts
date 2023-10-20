import type { Express } from 'express';
import express from 'express';

import { config } from './config';
import Routes from './routes';
import { Connect } from './utils';

export default class Server {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
        this.setVariables();
        this.expressMiddlewares();

        const routes = new Routes(app);
        routes.initRoutes();
    }

    private setVariables() {
        this.app.set('port', config.port);
    }

    private expressMiddlewares() {
        this.app.use(express.json());
    }

    public startServer() {
        this.app.listen(this.app.get('port'), async () => {
            const connect = new Connect(`${config.mongo.mongoUri}${config.mongo.dataBase}`);

            await connect.connect();
            console.log(`Listening on port ${this.app.get('port')}`);
        });
    }
}
