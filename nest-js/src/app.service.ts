import { Injectable } from '@nestjs/common';

import { GreetQueryParams, GreetResponse } from './dto';

@Injectable()
export class AppService {
  getHello(query: GreetQueryParams): GreetResponse {
    return {
      message: `Hello ${query.name}`
    };
  }
}
