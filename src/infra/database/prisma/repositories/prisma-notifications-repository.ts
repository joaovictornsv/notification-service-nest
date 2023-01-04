import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const notificationMappedToPrisma =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: notificationMappedToPrisma,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const rawNotificationFromDatabase =
      await this.prismaService.notification.findUnique({
        where: {
          id: notificationId,
        },
      });

    if (!rawNotificationFromDatabase) return null;

    const notificationMappedToDomain = PrismaNotificationMapper.toDomain(
      rawNotificationFromDatabase,
    );

    return notificationMappedToDomain;
  }

  async save(notification: Notification): Promise<void> {
    const notificationMappedToPrisma =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: {
        id: notificationMappedToPrisma.id,
      },
      data: notificationMappedToPrisma,
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const totalRecipientNotifications =
      await this.prismaService.notification.count({
        where: {
          recipientId: recipientId,
        },
      });

    return totalRecipientNotifications;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const recipientNotifications =
      await this.prismaService.notification.findMany({
        where: {
          recipientId: recipientId,
        },
      });

    const notificationsMappedToDomain = recipientNotifications.map(
      PrismaNotificationMapper.toDomain,
    );
    return notificationsMappedToDomain;
  }
}
