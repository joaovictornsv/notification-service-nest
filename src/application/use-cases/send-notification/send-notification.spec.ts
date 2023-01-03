import { Content } from '../../entities/notification/content';
import { Notification } from '../../entities/notification/notification';
import { InMemoryNotificationsRepository } from '../../../../test/repositories/memory/in-memory-notifications-repository';
import { SendNotificationUseCase } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotificationUseCase(
      memoryNotificationsRepository,
    );

    // Creating notification instance
    const contentInstance = new Content('example-content');
    const notification = new Notification({
      category: 'social',
      content: contentInstance,
      recipientId: 'example-recipient-id',
    });

    // Functional Test
    await sendNotification.execute(notification);

    expect(memoryNotificationsRepository.notifications).toHaveLength(1);
    expect(memoryNotificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
