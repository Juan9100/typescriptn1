import { Module } from '@nestjs/common';
import { PersonController } from './people.controller';
import { PersonService } from './people.service';
import { DataBaseModule } from 'src/database/database.module';
import { peopleProviders } from './people.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...peopleProviders],
})
export class PeopleModule {}
