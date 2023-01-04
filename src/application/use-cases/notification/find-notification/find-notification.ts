import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found';

interface FindNotificationUseCaseRequest {
  notificationId: string;
}

interface FindNotificationUseCaseResponse {
  notification: Notification | null;
}

@Injectable()
export class FindNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: FindNotificationUseCaseRequest,
  ): Promise<FindNotificationUseCaseResponse> {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    return { notification };
  }
}
