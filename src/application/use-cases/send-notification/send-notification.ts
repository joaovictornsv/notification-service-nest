import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { Notification } from '../../entities/notification/notification';

export class SendNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(notification: Notification): Promise<void> {
    await this.notificationsRepository.create(notification);
  }
}
