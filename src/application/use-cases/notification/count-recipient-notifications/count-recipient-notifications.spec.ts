import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { CountRecipientNotificationsUseCase } from './count-recipient-notifications';
import { SendNotificationUseCase } from '../send-notification/send-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count notifications by recipient id', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotificationsUseCase(
      memoryNotificationsRepository,
    );
    const sendNotificationUseCase = new SendNotificationUseCase(
      memoryNotificationsRepository,
    );

    const recipientId = 'example-recipient-id';
    const notificationWithRecipientId = makeNotification({ recipientId });

    const notificationWithDifferentRecipientId = makeNotification({
      recipientId: 'strange-recipient-id',
    });

    await sendNotificationUseCase.execute({
      notification: notificationWithRecipientId,
    });
    await sendNotificationUseCase.execute({
      notification: notificationWithRecipientId,
    });
    await sendNotificationUseCase.execute({
      notification: notificationWithDifferentRecipientId,
    });

    // Functional Test
    const request = { recipientId };
    const response = await countRecipientNotifications.execute(request);

    expect(response.totalNotificationsCount).toEqual(2);
  });
});
