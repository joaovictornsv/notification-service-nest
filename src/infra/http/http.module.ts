import { Module } from '@nestjs/common';
import { CreateNotificationUseCase } from 'src/application/use-cases/create-notification/create-notification';
import { SendNotificationUseCase } from 'src/application/use-cases/send-notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { SendNotificationController } from './controllers/notification/send-notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SendNotificationController],
  providers: [CreateNotificationUseCase, SendNotificationUseCase],
})
export class HttpModule {}
