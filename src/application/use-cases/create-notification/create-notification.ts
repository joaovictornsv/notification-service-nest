import { Content } from '../../entities/notification/content';
import { Notification } from '../../entities/notification/notification';

interface CreateNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface CreateNotificationResponse {
  notification: Notification;
}

export class CreateNotification {
  execute(request: CreateNotificationRequest): CreateNotificationResponse {
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
