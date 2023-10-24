import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { DataBaseModule } from 'src/database/database.module';
import { personProviders } from './person.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...personProviders],
})
export class PersonModule {}
