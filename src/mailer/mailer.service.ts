import { Injectable } from '@nestjs/common';
import { createMailTransport } from './config/mailer.config';
import { ConfigService } from '@nestjs/config';
import { SendMailDto } from './dto/sendMailDto';

@Injectable()
export class MailerService {
    constructor(private readonly configService: ConfigService) {}

    transport = createMailTransport(this.configService);

    async sendMail(sendMailDto: SendMailDto) {
        const { to, subject, html } = sendMailDto;

        try {
            await this.transport.sendMail({
                from: this.configService.get<string>('MAIL_FROM'),
                to,
                subject,
                html,
            });
        } catch (error) {
            console.log(`Não foi possivel enviar e-mail. ${error}`);
        }
    }
}
