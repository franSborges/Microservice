/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotfound } from './errors/notification-not-found';

/* eslint-disable prettier/prettier */
interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
   const { notificationId } = request;

  const notification = await this.notificationsRepository.findById(notificationId);

  if(!notification) {
    throw new NotificationNotfound();
   } 


   notification.unread();

   await this.notificationsRepository.save(notification);
  }
}