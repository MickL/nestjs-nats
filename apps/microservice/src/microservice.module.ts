import { Module } from '@nestjs/common';
import { MicroserviceController } from './microservice.controller';

@Module({
  imports: [],
  controllers: [MicroserviceController],
  providers: [],
})
export class MicroserviceModule {}
