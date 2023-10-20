import { StudentCollection } from "../models";
import { Student } from "../types";

export class StudentInfo {
    public async getStudents() {
        const students = await StudentCollection.find();

        return students;
    }

    public async createStudent(student: Student) {
        const studentToCreate = new StudentCollection(student);
        const result = await studentToCreate.save();

        return result;
    }
}
