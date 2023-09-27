/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotfound } from './errors/notification-not-found';
import { makeNotification } from 'test/factories/notification-factory';
import { ReadNotification } from './read-notification';


describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new ReadNotification(notificationsRepository);
    
    const notification = makeNotification();
    
   await notificationsRepository.create(notification)

   await cancelNotification.execute({ notificationId: notification.Id });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date));
  });



it('should not be able to read a non existing notification', async () => {
  const notificationsRepository = new InMemoryNotificationsRepository();
  const cancelNotification = new ReadNotification(notificationsRepository);

  expect(() => {
    return cancelNotification.execute({
    notificationId: 'fake-notification-id',
     });
   }).rejects.toThrow(NotificationNotfound);
  })
});