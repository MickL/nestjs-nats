import { Controller, Get } from '@nestjs/common';

@Controller()
export class MicroserviceController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello world';
  }
}
