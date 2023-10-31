import { Person } from './models';

export const peopleProviders = [
  {
    provide: 'PERSON_MODEL',
    useValue: Person,
  }
];
