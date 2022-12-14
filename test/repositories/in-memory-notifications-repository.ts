import { Notification } from '../../src/application/entities/notification';
import { NotificationRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
