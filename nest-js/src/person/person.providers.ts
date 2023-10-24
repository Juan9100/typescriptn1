import { Mongoose } from 'mongoose';

import { personSchema } from './schema';

export const personProviders = [
  {
    provide: 'PERSON_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('person', personSchema),
    inject: ['DATABASE_CONNECTION'], 
  }
];
