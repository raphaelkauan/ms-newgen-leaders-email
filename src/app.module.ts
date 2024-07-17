import { Module } from '@nestjs/common';
import { RmqModule } from './rmq/rmq.module';
import { MailerModule } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(), RmqModule, MailerModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
