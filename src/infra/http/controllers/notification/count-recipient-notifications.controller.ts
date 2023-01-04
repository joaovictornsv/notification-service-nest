import { Controller, Get, Param } from '@nestjs/common';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/notification/count-recipient-notifications/count-recipient-notifications';

@Controller('notifications')
export class CountRecipientNotificationsController {
  constructor(
    private readonly countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase,
  ) {}

  @Get('recipient/:recipientId/count')
  async handle(@Param('recipientId') recipientId: string) {
    const { totalNotificationsCount } =
      await this.countRecipientNotificationsUseCase.execute({
        recipientId,
      });

    return {
      count: totalNotificationsCount,
    };
  }
}
