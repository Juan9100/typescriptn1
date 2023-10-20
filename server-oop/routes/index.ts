import type { Express } from 'express';

import HealthCheck from './health-check';
import Student from './student';

export default class Routes {
    app: Express; 

    constructor(app: Express) {
        this.app = app;
    }

    public initRoutes() {
        const healthCheckRoutes = new HealthCheck(this.app);
        const studentRoutes = new Student(this.app);
        
        healthCheckRoutes.healthCheckRoutes();
        studentRoutes.studentRoutes();
    }
}