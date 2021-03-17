import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceController {
  constructor() {}

  @MessagePattern('something')
  getHello(): string {
    return 'Hello world';
  }
}
