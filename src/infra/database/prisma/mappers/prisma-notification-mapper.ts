/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
        id: notification.Id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
    }
  }
}