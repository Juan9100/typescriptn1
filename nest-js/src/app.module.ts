import { Module } from '@nestjs/common';
import { PersonController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PersonModule, PeopleModule],
  controllers: [PersonController],
  providers: [AppService],
})
export class AppModule {}
