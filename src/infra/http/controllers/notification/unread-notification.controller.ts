import { Controller, Param, Patch } from '@nestjs/common';
import { UnreadNotificationUseCase } from '@application/use-cases/notification/unread-notification/unread-notification';
import { FindNotificationUseCase } from '@application/use-cases/notification/find-notification/find-notification';

@Controller('notifications')
export class UnreadNotificationController {
  constructor(
    private readonly findNotificationUseCase: FindNotificationUseCase,
    private readonly unreadNotificationUseCase: UnreadNotificationUseCase,
  ) {}

  @Patch(':notificationId/unread')
  async handle(@Param('notificationId') notificationId: string) {
    const { notification } = await this.findNotificationUseCase.execute({
      notificationId,
    });

    await this.unreadNotificationUseCase.execute({ notification });
  }
}
