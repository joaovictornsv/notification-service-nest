import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification/notification';
import { Content } from '@application/entities/notification/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const notificationToPrisma = {
      id: notification.id,
      category: notification.category,
      recipientId: notification.recipientId,
      content: notification.content.value,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };

    return notificationToPrisma;
  }

  static toDomain(raw: RawNotification): Notification {
    const contentInstance = new Content(raw.content);

    const notificationToDomain = new Notification(
      {
        category: raw.category,
        content: contentInstance,
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );

    return notificationToDomain;
  }
}
