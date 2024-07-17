import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';

config();

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: [process.env.URL_RMQ],
            queue: process.env.QUEUE_RMQ,
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.listen();
}
bootstrap();
