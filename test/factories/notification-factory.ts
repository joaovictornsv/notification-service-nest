import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export class NotificationFactory {
  static makeNotification(override: Override = {}) {
    const notification = new Notification({
      category: 'social',
      content: new Content('example-content'),
      recipientId: 'strange-recipient-id',
      ...override,
    });

    return notification;
  }
}
