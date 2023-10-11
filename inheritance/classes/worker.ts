import { IWorker } from "../types";
import { Person } from "./person";

export class Worker extends Person {
    private company: string;
    private currentWorkingTime: string;
    private role: string;
    private salary: number;
    

    constructor(workerData: IWorker) {
        super(workerData);
        this.company = workerData.company;
        this.currentWorkingTime = workerData.currentWorkingTime;
        this.role = workerData.role;
        this.salary = workerData.salary;
    }

    public override getPersonInfo() {
        const personData = super.getPersonInfo();

        personData.age += 10;

        return personData;
    }

    public getWorkInformation() {
        return {
            company: this.company,
            currentWorkingTime: this.currentWorkingTime,
            role: this.role,
            salary: this.salary
        }
    }
}
