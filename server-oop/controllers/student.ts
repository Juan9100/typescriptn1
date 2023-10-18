import { 
    NextFunction, 
    Request, 
    Response 
} from 'express';

import { StudentInfo } from '../services';
import { studentBodySchema } from '../dto';

export class StudentController extends StudentInfo {

    constructor() {
        super();
    }

    public async getStudent(
        _: unknown,
        res: Response,
        next: NextFunction
    ) {
        try {
            console.log('this.getStudents', this)

            const students = await super.getStudents();

            res.send(students);
        } catch(err) {
            next(err);
        }
    }

    public async createStudentController(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            console.log('body: ', req.body)

            if(!req.body) {
                res.status(400).send({
                    message: 'no body was provided'
                })
            }

            const student = await studentBodySchema.validateAsync(req.body);

            console.log('validation: ', student)

            const students = await super.createStudent(student);

            res.send(students);
        } catch(err) {
            next(err);
        }
    }
}