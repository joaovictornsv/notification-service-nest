import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification';
import { CreateNotificationUseCase } from '../create-notification/create-notification';
import { SendNotificationUseCase } from '../send-notification/send-notification';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const createNotificationUseCase = new CreateNotificationUseCase();
    const cancelNotification = new CancelNotificationUseCase(
      memoryNotificationsRepository,
    );
    const sendNotificationUseCase = new SendNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance and add to in-memory repository
    const { notification } = createNotificationUseCase.execute({
      category: 'social',
      content: 'example-content',
      recipientId: 'example-recipient-id',
    });

    const request = { notification };
    await sendNotificationUseCase.execute(request);

    // Functional Test
    await cancelNotification.execute(request);

    expect(notification).toHaveProperty('canceledAt');
    expect(
      memoryNotificationsRepository.notifications[0].canceledAt,
    ).toBeInstanceOf(Date);
  });
});
