/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NoticationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { SendNotification } from '@app/use-cases/send-notification';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientIdNotifications } from '@app/use-cases/count-recipientId-notifications';
import { GetRecipientIdNotifications } from '@app/use-cases/get-recipient-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientIdNotifications,
    GetRecipientIdNotifications,
    ReadNotification,
    UnreadNotification
  ]
})

export class HttModule {}
