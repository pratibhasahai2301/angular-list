import { Injectable } from '@angular/core';

import { UserServiceMock } from '@app/core/services/user/user.service.mock';

@Injectable({ providedIn: 'root' })
export class UserService extends UserServiceMock {
}
