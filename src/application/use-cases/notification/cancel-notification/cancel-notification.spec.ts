import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance and add to in-memory repository
    const notification = makeNotification();
    await memoryNotificationsRepository.create(notification);

    // Functional Test
    const request = { notification };
    await cancelNotification.execute(request);

    expect(notification).toHaveProperty('canceledAt');
    expect(
      memoryNotificationsRepository.notifications[0].canceledAt,
    ).toBeInstanceOf(Date);
  });
});
