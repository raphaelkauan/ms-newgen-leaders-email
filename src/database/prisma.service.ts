import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enable(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
