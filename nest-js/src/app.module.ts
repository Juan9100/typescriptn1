import { Module } from '@nestjs/common';
import { PersonController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [PersonController],
  providers: [AppService],
})
export class AppModule {}
