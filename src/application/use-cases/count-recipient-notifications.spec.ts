import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient Notification', () => {
  it('should be able to count recipients notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-1',
    });

    expect(count).toBe(2);
  });
});
