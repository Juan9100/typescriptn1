import { Controller, Body, Get, Post } from '@nestjs/common';
import { PersonService } from './person.service';

import { PersonDTO } from './dto';
import { Person } from './interfaces';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

class PersonTest {
  name: string;
  lastName: string;
}

@ApiTags('person')
@Controller('/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  @ApiResponse({
    description: 'crea una persona',
    status: 200,
    type: PersonTest,
    schema: {
      example: {
        name: 'Mateo',
        lastName: 'Gomez'
      }
    }
  })
  async create(@Body() person: PersonDTO): Promise<Person> {
    return this.personService.create(person);
  }

  @Get()
  async find(): Promise<Person[]> {
    return this.personService.find();
  }
}
