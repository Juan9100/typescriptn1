import { IPerson } from "../types";

export class Person {
    private age: number;
    private height: number;
    private lastNames: string;    
    private name: string;
    private middleName: string;    
    private weight: number;

    constructor(personData: IPerson) {
        this.age = personData.age;
        this.height = personData.height;
        this.lastNames = personData.lastNames;
        this.middleName = personData.middleName;
        this.name = personData.middleName;
        this.weight = personData.weight;
    }

    public getPersonInfo() {
        return {
            age: this.age,
            height: this.height,
            lastNames: this.lastNames,
            name: this.name,
            middleName: this.middleName,
            weight: this.weight
        }
    }
}
