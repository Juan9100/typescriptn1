import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { GreetQueryParams, GreetResponse } from './dto';

@Controller('/greet')
export class PersonController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: GreetQueryParams ): GreetResponse {
    return this.appService.getHello(query);
  }
}
