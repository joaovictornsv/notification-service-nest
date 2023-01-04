import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { ReadNotificationUseCase } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance and add to in-memory repository
    const notification = makeNotification();
    await memoryNotificationsRepository.create(notification);

    // Functional Test
    const request = { notification };
    await readNotification.execute(request);

    expect(notification.readAt).toBeTruthy();
    expect(
      memoryNotificationsRepository.notifications[0].readAt,
    ).toBeInstanceOf(Date);
  });
});
