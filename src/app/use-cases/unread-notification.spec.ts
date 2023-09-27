/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotfound } from './errors/notification-not-found';
import { makeNotification } from 'test/factories/notification-factory';
import { UnreadNotification } from './unread-notification';


describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);
    
    const notification = makeNotification({
      readAt: new Date(),
    });
    
   await notificationsRepository.create(notification)

   await unreadNotification.execute({ notificationId: notification.Id });

    expect(notificationsRepository.notifications[0].readAt).toBeNull()
  });



it('should not be able to unread a non existing notification', async () => {
  const notificationsRepository = new InMemoryNotificationsRepository();
  const unreadNotification = new UnreadNotification(notificationsRepository);

  expect(() => {
    return unreadNotification.execute({
    notificationId: 'fake-notification-id',
     });
   }).rejects.toThrow(NotificationNotfound);
  })
});