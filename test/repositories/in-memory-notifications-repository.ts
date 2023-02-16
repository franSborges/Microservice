/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';


export class InMemoryNotificationsRepository implements NotificationsRepository {
  
  public notifications: Notification[] = [];

 async  findById(notificationId: string): Promise<Notification | null> {
   const notification  = this.notifications.find(
    (i) => i.Id === notificationId
  );

   if (!notification) {
    return null;
   } 
   
   return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex((i) => i.Id === notification.Id);

    if (notificationIndex >= 0) {
       this.notifications[notificationIndex] = notification;
    }
  }
  
  async create(notification: Notification) {
   this.notifications.push(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length;
  }
  
  async findManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length;
  }
}
