import { Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { RmqController } from './rmq.controller';
import { MailerModule } from 'src/mailer/mailer.module';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    imports: [MailerModule],
    controllers: [RmqController],
    providers: [RmqService, PrismaService],
})
export class RmqModule {}
