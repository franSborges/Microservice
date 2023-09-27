/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from 'test/factories/notification-factory';
import { GetRecipientIdNotifications } from './get-recipient-notification';

describe('Count recipients notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientIdNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
     makeNotification({ recipientId: 'recipient-1'})
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2'})
     );

     await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1'})
     );


   const { notifications } = await getRecipientNotifications.execute({
       recipientId: 'recipient-1'
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({recipientId: 'recipient-1'}),
        expect.objectContaining({recipientId: 'recipient-1'}),
      ]),
    );
  });
});
