import { Content } from '../../../entities/notification/content';
import { Notification } from '../../../entities/notification/notification';
import { InMemoryNotificationsRepository } from '../../../../../test/repositories/memory/in-memory-notifications-repository';
import { FindNotificationUseCase } from './find-notification';
import { NotificationNotFound } from '../../../use-cases/errors/notification-not-found';

describe('Find notification', () => {
  it('should be able to find a notification by id', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const findNotification = new FindNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance and add to repository
    const contentInstance = new Content('example-content');
    const notification = new Notification({
      category: 'social',
      content: contentInstance,
      recipientId: 'example-recipient-id',
    });
    await memoryNotificationsRepository.create(notification);
    const request = { notificationId: notification.id };

    // Functional Test
    const response = await findNotification.execute(request);

    expect(response.notification).toEqual(notification);
  });

  it('should not be able to find a notification by id if notification not exists', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const findNotification = new FindNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Functional Test
    const request = { notificationId: 'example-notification-id' };
    expect(async () => await findNotification.execute(request)).rejects.toThrow(
      NotificationNotFound,
    );
  });
});
