import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient Notification', () => {
  it('should be able to get recipients notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
      ]),
    );
  });
});
