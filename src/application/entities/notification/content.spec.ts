import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    const smallString = 'aaa';

    expect(() => new Content(smallString)).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    const bigString = 'a'.repeat(241);

    expect(() => new Content(bigString)).toThrow();
  });
});
