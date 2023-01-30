/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NoticationsController {
  @Post()
  public async create(@Body() body: CreateNotificationBody) {
   const { recipientId, content, category } = body;
}
