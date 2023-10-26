import uuid from 'uuid';

export function getUserId(): string {
  return `user-${uuid.v4()}`;
}
