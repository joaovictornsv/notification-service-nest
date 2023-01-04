import { CreateNotificationUseCase } from './create-notification';

describe('Create notification', () => {
  it('should be able to create a notification', () => {
    const createNotification = new CreateNotificationUseCase();

    const request = {
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'Nova solicitação de amizade!',
    };

    const response = createNotification.execute(request);

    expect(response).toBeTruthy();
    expect(response.notification).toBeTruthy();
  });
});
