import { Injectable } from '@nestjs/common';
import { Content } from '../../entities/notification/content';
import { Notification } from '../../entities/notification/notification';

interface CreateNotificationUseCaseRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface CreateNotificationUseCaseResponse {
  notification: Notification;
}

@Injectable()
export class CreateNotificationUseCase {
  execute(
    request: CreateNotificationUseCaseRequest,
  ): CreateNotificationUseCaseResponse {
    const contentInstance = new Content(request.content);

    const notification = new Notification({
      content: contentInstance,
      category: request.category,
      recipientId: request.recipientId,
    });

    return {
      notification,
    };
  }
}
