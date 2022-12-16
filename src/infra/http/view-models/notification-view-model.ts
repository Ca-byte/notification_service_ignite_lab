import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      notification: {
        id: notification.id,
        content: notification.content.Value,
        category: notification.category,
        recipientId: notification.recipientId,
      },
    };
  }
}
