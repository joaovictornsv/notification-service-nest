import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { UnreadNotificationUseCase } from './unread-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance and add to in-memory repository
    const notification = makeNotification();
    await memoryNotificationsRepository.create(notification);

    // Functional Test
    const request = { notification };
    await unreadNotification.execute(request);

    expect(notification.readAt).toEqual(null);
    expect(memoryNotificationsRepository.notifications[0].readAt).toEqual(null);
  });
});
