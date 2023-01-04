import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '../../../entities/notification/notification';

interface SendNotificationUseCaseRequest {
  notification: Notification;
}

type SendNotificationUseCaseResponse = void;

@Injectable()
export class SendNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: SendNotificationUseCaseRequest,
  ): Promise<SendNotificationUseCaseResponse> {
    await this.notificationsRepository.create(request.notification);
  }
}
