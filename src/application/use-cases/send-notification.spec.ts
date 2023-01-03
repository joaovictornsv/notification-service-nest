import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const request = {
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'Nova solicitação de amizade!',
    };

    const response = await sendNotification.execute(request);

    expect(response).toBeTruthy();
    expect(response.notification).toBeTruthy();
  });
});
