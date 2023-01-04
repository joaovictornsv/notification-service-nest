import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';

interface CancelNotificationUseCaseRequest {
  notification: Notification;
}

type CancelNotificationUseCaseResponse = void;

@Injectable()
export class CancelNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: CancelNotificationUseCaseRequest,
  ): Promise<CancelNotificationUseCaseResponse> {
    const notification = request.notification;

    notification.cancel();
    this.notificationsRepository.save(notification);
  }
}
