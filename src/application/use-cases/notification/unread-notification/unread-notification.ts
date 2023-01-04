import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';

interface UnreadNotificationUseCaseRequest {
  notification: Notification;
}

type UnreadNotificationUseCaseResponse = void;

@Injectable()
export class UnreadNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: UnreadNotificationUseCaseRequest,
  ): Promise<UnreadNotificationUseCaseResponse> {
    const notification = request.notification;

    notification.unread();
    this.notificationsRepository.save(notification);
  }
}
