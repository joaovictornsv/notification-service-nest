import { Controller, Param, Patch } from '@nestjs/common';
import { ReadNotificationUseCase } from '@application/use-cases/notification/read-notification/read-notification';
import { FindNotificationUseCase } from '@application/use-cases/notification/find-notification/find-notification';

@Controller('notifications')
export class ReadNotificationController {
  constructor(
    private readonly findNotificationUseCase: FindNotificationUseCase,
    private readonly readNotificationUseCase: ReadNotificationUseCase,
  ) {}

  @Patch(':notificationId/read')
  async handle(@Param('notificationId') notificationId: string) {
    const { notification } = await this.findNotificationUseCase.execute({
      notificationId,
    });

    await this.readNotificationUseCase.execute({ notification });
  }
}
