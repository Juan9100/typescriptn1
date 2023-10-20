import type { Express } from 'express';

import { StudentController } from '../controllers';

export default class Student {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
    }


    public studentRoutes() {
        const studentController = new StudentController();

        this.app.get('/student', studentController.getStudent);
        this.app.post('/student', studentController.createStudentController);
    }
}
