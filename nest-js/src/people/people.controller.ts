import { Controller, Get } from '@nestjs/common';
import { PersonService } from './people.service';

import { Person } from './models';

@Controller('/person2')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async find(): Promise<Person[]> {
    return this.personService.find();
  }
}
