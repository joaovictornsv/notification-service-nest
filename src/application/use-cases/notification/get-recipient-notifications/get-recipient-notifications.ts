import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';

interface GetRecipientNotificationsUseCaseRequest {
  recipientId: string;
}

interface GetRecipientNotificationsUseCaseResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotificationsUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: GetRecipientNotificationsUseCaseRequest,
  ): Promise<GetRecipientNotificationsUseCaseResponse> {
    const recipientNotifications =
      await this.notificationsRepository.findManyByRecipientId(
        request.recipientId,
      );

    return {
      notifications: recipientNotifications,
    };
  }
}
