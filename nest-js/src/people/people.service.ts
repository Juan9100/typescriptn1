import { Inject, Injectable } from '@nestjs/common';

import { Person } from './models';

@Injectable()
export class PersonService {
  constructor(@Inject('PERSON_MODEL') private readonly personModel: typeof Person) {}

  async find(): Promise<Person[]> {
    return this.personModel.findAll<Person>()
  }
}
