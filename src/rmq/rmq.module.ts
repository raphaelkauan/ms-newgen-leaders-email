import { Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { RmqController } from './rmq.controller';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
    imports: [MailerModule],
    controllers: [RmqController],
    providers: [RmqService],
})
export class RmqModule {}
