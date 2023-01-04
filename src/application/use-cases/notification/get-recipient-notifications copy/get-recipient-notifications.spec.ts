import { InMemoryNotificationsRepository } from '@test/repositories/memory/in-memory-notifications-repository';
import { GetRecipientNotificationsUseCase } from './get-recipient-notifications';
import { SendNotificationUseCase } from '../send-notification/send-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get recipient notifications', () => {
  it('should be able to get notifications by recipient id', async () => {
    // SUT
    const memoryNotificationsRepository = new InMemoryNotificationsRepository();
    const gettRecipientNotifications = new GetRecipientNotificationsUseCase(
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
    const response = await gettRecipientNotifications.execute(request);

    expect(response.notifications).toHaveLength(2);
    expect(response.notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
