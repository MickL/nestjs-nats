import { NestFactory } from '@nestjs/core';
import { MicroserviceModule } from './microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        MicroserviceModule,
        {
            transport:            Transport.NATS,
            options: {
                maxReconnectAttempts: -1,
                reconnectTimeWait:    1000,
            }
        },
    );
    app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
