/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@app/entities/notification';

/* eslint-disable prettier/prettier */
interface GetRecipientIdNotificationsRequest {
  recipientId: string;
}

interface GetRecipientIdNotificationsResponse {
   notifications: Notification[];
} 

@Injectable()
export class GetRecipientIdNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: GetRecipientIdNotificationsRequest): Promise<GetRecipientIdNotificationsResponse> {
   const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

   return {
    notifications
    };
  }
}