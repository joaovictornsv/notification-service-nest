import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SendNotificationController } from './controllers/notification/send-notification.controller';
import { CanceldNotificationController } from './controllers/notification/cancel-notification.controller';
import { ReadNotificationController } from './controllers/notification/read-notification.controller';
import { UnreadNotificationController } from './controllers/notification/unread-notification.controller';
import { GetRecipientNotificationsController } from './controllers/notification/get-recipient-notifications.controller';
import { CountRecipientNotificationsController } from './controllers/notification/count-recipient-notifications.controller';
import { CreateNotificationUseCase } from '@application/use-cases/notification/create-notification/create-notification';
import { SendNotificationUseCase } from '@application/use-cases/notification/send-notification/send-notification';
import { FindNotificationUseCase } from '@application/use-cases/notification/find-notification/find-notification';
import { CancelNotificationUseCase } from '@application/use-cases/notification/cancel-notification/cancel-notification';
import { ReadNotificationUseCase } from '@application/use-cases/notification/read-notification/read-notification';
import { UnreadNotificationUseCase } from '@application/use-cases/notification/unread-notification/unread-notification';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/notification/get-recipient-notifications/get-recipient-notifications';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/notification/count-recipient-notifications/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SendNotificationController,
    CanceldNotificationController,
    ReadNotificationController,
    UnreadNotificationController,
    GetRecipientNotificationsController,
    CountRecipientNotificationsController,
  ],
  providers: [
    CreateNotificationUseCase,
    SendNotificationUseCase,
    FindNotificationUseCase,
    CancelNotificationUseCase,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
    GetRecipientNotificationsUseCase,
    CountRecipientNotificationsUseCase,
  ],
})
export class HttpModule {}
