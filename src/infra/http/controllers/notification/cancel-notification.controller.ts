import { Controller, Param, Patch } from '@nestjs/common';
import { CancelNotificationUseCase } from '@application/use-cases/notification/cancel-notification/cancel-notification';
import { FindNotificationUseCase } from '@application/use-cases/notification/find-notification/find-notification';

@Controller('notifications')
export class CanceldNotificationController {
  constructor(
    private readonly findNotificationUseCase: FindNotificationUseCase,
    private readonly cancelNotificationUseCase: CancelNotificationUseCase,
  ) {}

  @Patch(':notificationId/cancel')
  async handle(@Param('notificationId') notificationId: string) {
    const { notification } = await this.findNotificationUseCase.execute({
      notificationId,
    });

    await this.cancelNotificationUseCase.execute({ notification });
  }
}
