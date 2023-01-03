import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    const contentInstance = new Content(
      'Você recebeu uma solicitação de amizade!',
    );

    const notification = new Notification({
      category: 'social',
      content: contentInstance,
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
