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

    return 'Sent! You should not be able read this if .send() had an error.';
  }

  @Get('emit')
  async getEmit(): Promise<string> {
    await this.natsClient.emit<void>('something', {}).toPromise();

    return 'Emitted! You should not be able read this if .emit() had an error.';
  }
}
