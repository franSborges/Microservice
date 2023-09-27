/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '@app/entities/content';
import { CountRecipientIdNotifications } from './count-recipientId-notifications';

describe('Count recipients notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientIdNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'example-recipient-id',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'recipient-2'
     }),
    );

   const { count } = await countRecipientNotifications.execute({
       recipientId: 'recipient-1'
    });

    expect(count).toEqual(2);
  });
});
