import { Notification } from 'src/application/entities/notification/notification';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public readonly notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
