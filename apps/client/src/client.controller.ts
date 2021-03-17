import { Controller, Get, Inject } from '@nestjs/common';
import { ClientNats } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

@Controller()
export class ClientController {
  constructor(
      @Inject('NATS_CLIENT') private natsClient: ClientNats,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    await this.natsClient.send<void>('something', {})
        .pipe(timeout(2000))
        .toPromise();

    return 'Hello world';
  }
}
