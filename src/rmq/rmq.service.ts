import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mailDto';
import { MailerService } from 'src/mailer/mailer.service';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RmqService {
    constructor(
        private readonly mailerService: MailerService,
        private readonly prisma: PrismaService,
    ) {}

    async mail(data: MailDto) {
        const message = {
            to: data.email,
            subject: `Mensagem de bem-vindo.`,
            html: `<h1>Bem vindo(a) <strong>${data.username}</strong>!</h1>`,
        };

        await this.prisma.users.create({ data });

        console.log(data);

        this.mailerService.sendMail(message);
    }
}
