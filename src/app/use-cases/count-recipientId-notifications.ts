/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

/* eslint-disable prettier/prettier */
interface CountRecipientIdNotificationsRequest {
  recipientId: string;
}
interface CountRecipientIdNotificationsResponse {
   count: number;
} 
@Injectable()
export class CountRecipientIdNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CountRecipientIdNotificationsRequest): Promise<CountRecipientIdNotificationsResponse> {
   const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);

   return {
    count
    }
  }
}