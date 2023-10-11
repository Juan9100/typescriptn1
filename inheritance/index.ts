import { 
    Hobbies
    // Person,
    // Worker
} from "./classes";
import { Frecuency } from './types';

const hobbies = new Hobbies({
    company: 'Google',
    currentWorkingTime: '2 years',
    height: 190,
    hobbies: [
        {
            name: 'Tennis',
            place: 'Juanes de la paz',
            frecuency: Frecuency['WEEK_DAYS']
        },
        {
            name: 'Gaming',
            place: 'PC',
            frecuency: Frecuency['WEEK_DAYS']
        }
    ],
    weight: 80,
    age: 40,
    name: 'Roberto',
    middleName: 'Carlos',
    lastNames: 'Correa',
    role: 'Senior developer',
    salary: 200000
});

console.log(hobbies.getPersonAndHobbiesInfo());

// const person = new Person({
//     height: 190,
//     weight: 80,
//     age: 40,
//     name: 'Roberto',
//     middleName: 'Carlos',
//     lastNames: 'Correa',
// });

// const worker = new Worker({
//     company: 'Google',
//     currentWorkingTime: '2 years',
//     height: 190,
//     weight: 80,
//     age: 40,
//     name: 'Roberto',
//     middleName: 'Carlos',
//     lastNames: 'Correa',
//     role: 'Senior developer',
//     salary: 200000
// });

// console.log(worker.getPersonInfo());
// console.log(person.getPersonInfo());
// console.log(worker.getWorkInformation());
