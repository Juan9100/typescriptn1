import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { PersonDTO } from './dto';
import { Person } from './interfaces';

@Injectable()
export class PersonService {
  constructor(@Inject('PERSON_MODEL') private readonly personModel: Model<Person>) {}

  async create(person: PersonDTO): Promise<Person> {
    const createdPerson = this.personModel.create(person);

    return createdPerson;
  }

  async find(): Promise<Person[]> {
    const peopleFound = this.personModel.find().exec();

    return peopleFound;
  }
}
