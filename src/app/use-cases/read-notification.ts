/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotfound } from './errors/notification-not-found';

/* eslint-disable prettier/prettier */
interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
   const { notificationId } = request;

  const notification = await this.notificationsRepository.findById(notificationId);

  if(!notification) {
    throw new NotificationNotfound();
   } 


   notification.read();

   await this.notificationsRepository.save(notification);
  }
}