import { Injectable } from '@angular/core';

import { LeaderboardServiceMock } from '@app/modules/leaderboard/services/leaderboard.service.mock';

@Injectable({ providedIn: 'root' })
export class LeaderboardService extends LeaderboardServiceMock {
}
