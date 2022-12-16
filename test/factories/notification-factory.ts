import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationsProps,
} from '@application/entities/notification';

type Override = Partial<NotificationsProps>;
export function makeNotification(overrite: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friend request!'),
    recipientId: 'example-recipient-1',
    ...overrite,
  });
}
