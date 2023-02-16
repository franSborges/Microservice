/* eslint-disable prettier/prettier */
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as RawNotification } from '@prisma/client';
export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.Id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt,
    },
     raw.id
     );
  }
}
