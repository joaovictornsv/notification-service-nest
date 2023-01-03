import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notification-repository';
import { Notification } from '../../entities/notification/notification';

@Injectable()
export class SendNotificationUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(notification: Notification): Promise<void> {
    await this.notificationsRepository.create(notification);
  }
}
