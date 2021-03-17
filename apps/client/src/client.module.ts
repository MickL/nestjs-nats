import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports:     [
        ClientsModule.register([
            {
                name:      'NATS_CLIENT',
                transport: Transport.NATS,
                options:   {
                    url:                  'nats://localhost:4222',
                    maxReconnectAttempts: -1,
                    reconnectTimeWait:    1000,
                }
            },
        ]),
    ],
    controllers: [ClientController],
    providers:   [],
})
export class ClientModule {
}
