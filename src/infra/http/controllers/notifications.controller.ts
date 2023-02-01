/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '../../../../src/app/use-cases/send-notification';

@Controller('notifications')
export class NoticationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  public async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
