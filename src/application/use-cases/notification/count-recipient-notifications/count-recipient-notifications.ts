import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/notification-repository';

interface CountRecipientNotificationsUseCaseRequest {
  recipientId: string;
}

interface CountRecipientNotificationsUseCaseResponse {
  totalNotificationsCount: number;
}

@Injectable()
export class CountRecipientNotificationsUseCase {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: CountRecipientNotificationsUseCaseRequest,
  ): Promise<CountRecipientNotificationsUseCaseResponse> {
    const totalNotificationsCount =
      await this.notificationsRepository.countManyByRecipientId(
        request.recipientId,
      );

    return { totalNotificationsCount };
  }
}
