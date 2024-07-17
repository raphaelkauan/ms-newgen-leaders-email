import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';

export const createMailTransport = (configService: ConfigService) => {
    return createTransport({
        host: configService.get<string>('MAIL_HOST'),
        port: configService.get<number>('MAIL_PORT'),
        secure: true,
        auth: {
            user: configService.get<string>('MAIL_FROM'),
            pass: configService.get<string>('MAIL_PASS'),
        },
    });
};
