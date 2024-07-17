import { Controller } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { MailDto } from './dto/mailDto';

@Controller('rmq')
export class RmqController {
    constructor(private readonly rmqService: RmqService) {}

    @EventPattern('v1.queue-mail')
    async mail(@Payload() data: MailDto) {
        return this.rmqService.mail(data);
    }
}
