import { Notification } from 'src/application/entities/notification/notification';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public readonly notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notificationFound = this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    if (notificationFound === undefined) {
      return null;
    }

    return notificationFound;
  }

  async save(notification: Notification): Promise<void> {
    const notificationTargetId = notification.id;

    const notificationTargetIndex = this.notifications.findIndex(
      (notification) => notification.id === notificationTargetId,
    );

    if (notificationTargetIndex !== -1) {
      this.notifications[notificationTargetIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const recipientNotifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    const totalRecipientNotifications = recipientNotifications.length;
    return totalRecipientNotifications;
  }
}
