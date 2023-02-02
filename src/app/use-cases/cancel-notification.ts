/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotfound } from './errors/notification-not-found';

/* eslint-disable prettier/prettier */
interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
   const { notificationId } = request;

  const notification = await this.notificationsRepository.findById(notificationId);

  if(!notification) {
    throw new NotificationNotfound();
   } 


   notification.cancel();

   await this.notificationsRepository.save(notification);
  }
}