import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../../dtos/create-notification-body';
import { CreateNotificationUseCase } from '@application/use-cases/notification/create-notification/create-notification';
import { SendNotificationUseCase } from '@application/use-cases/notification/send-notification/send-notification';
import { Notification } from '@application/entities/notification/notification';

@Controller('notifications')
export class SendNotificationController {
  constructor(
    private readonly createNotificationUseCase: CreateNotificationUseCase,
    private readonly sendNotificationUseCase: SendNotificationUseCase,
  ) {}

  @Post()
  async createAndSendNotification(@Body() body: CreateNotificationBody) {
    const notification = this.createNotificationInstance(body);

    await this.sendNotificationUseCase.execute({ notification });
  }

  private createNotificationInstance(
    data: CreateNotificationBody,
  ): Notification {
    const response = this.createNotificationUseCase.execute({
      category: data.category,
      content: data.content,
      recipientId: data.recipientId,
    });

    return response.notification;
  }
}
