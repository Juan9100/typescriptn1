export interface IPerson {
    age: number;
    height: number;
    lastNames: string;
    name: string;
    middleName: string;
    weight: number;
}

export interface IWorker extends IPerson {
    company: string;
    currentWorkingTime: string;
    role: string;
    salary: number;
}

export enum Frecuency {
    WEEKEND = 'every weekend',
    WEEK_DAYS = 'every day',
    ONE_DAY = 'once a week',
    MORE_THAN_ONCE = 'more than a day a week'
}

export interface Hobby {
    name: string;
    place: string;
    frecuency: Frecuency;
}

export interface IHobbies extends IWorker {
    hobbies: Hobby[];
}

// export type Person = {
//     height: number;
//     weight: number;
//     age: number;
//     name: string;
//     middleName: string;
//     lastNames: string;
// }

// export type Worker = Person & {
//     role: string;
//     company: string;
//     salary: number;
//     currentWorkingTime: string;
// }
