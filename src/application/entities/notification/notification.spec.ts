import { randomUUID } from 'crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');
    const recipientUUID = randomUUID();

    const notification = new Notification({
      category: 'social',
      content: content,
      recipientId: recipientUUID,
    });

    expect(notification).toBeTruthy();
  });
});
