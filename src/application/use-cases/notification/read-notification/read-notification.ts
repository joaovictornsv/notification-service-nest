import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';

interface ReadNotificationUseCaseRequest {
  notification: Notification;
}

type ReadNotificationUseCaseResponse = void;

@Injectable()
export class ReadNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: ReadNotificationUseCaseRequest,
  ): Promise<ReadNotificationUseCaseResponse> {
    const notification = request.notification;

    notification.read();
    this.notificationsRepository.save(notification);
  }
}
