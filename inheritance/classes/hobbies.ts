import { Hobby, IHobbies } from "../types";
import { Worker } from "./worker";

export class Hobbies extends Worker {
    private hobbies: Hobby[];

    constructor(hobbiesData: IHobbies) {
        super(hobbiesData);
        this.hobbies = hobbiesData.hobbies;
    }

    getPersonAndHobbiesInfo() {
        const personalInfo = super.getPersonInfo();
        const workerInfo = super.getWorkInformation();

        return {
            hobbies: this.hobbies,
            ...personalInfo,
            ...workerInfo
        }
    }
}