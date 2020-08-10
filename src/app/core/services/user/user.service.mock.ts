import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '@app/core/models/user.model';
import { CURRENT_USER } from '@app/core/services/user/user.mock';

export const DELAY = 2000;

export class UserServiceMock {
  getCurrentUser(): Observable<User> {
    return of(CURRENT_USER).pipe(delay(DELAY));
  }
}
