import { Controller, Get, Param } from '@nestjs/common';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/notification/get-recipient-notifications/get-recipient-notifications';

@Controller('notifications')
export class GetRecipientNotificationsController {
  constructor(
    private readonly getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase,
  ) {}

  @Get('/recipient/:recipientId')
  async handle(@Param('recipientId') recipientId: string) {
    const { notifications } =
      await this.getRecipientNotificationsUseCase.execute({
        recipientId,
      });

    return notifications;
  }
}
