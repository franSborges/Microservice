/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  
  async create(notification: Notification) {
   this.notifications.push(notification);
  }
}
