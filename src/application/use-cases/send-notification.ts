import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
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
