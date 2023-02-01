/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../src/app/entities/notification';
import { NotificationsRepository } from '../../../../src/app/repositories/notifications-repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.Id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createAt,
      },
    });
  }
}
