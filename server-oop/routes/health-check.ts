import type { Express } from 'express';

export default class HealthCheck {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
    }


    public healthCheckRoutes() {
        this.app.get(
            '/health-check', 
            (_, res) => 
            res.send({ 
                message: `The server is up and running on port ${this.app.get('port')}` 
        }))
    }
}
