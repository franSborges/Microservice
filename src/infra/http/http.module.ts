/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NoticationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { SendNotification } from '@app/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticationsController],
  providers: [SendNotification]
})

export class HttModule {}
