import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LEADERBOARDS } from '@app/modules/leaderboard/mocks/leaderboard.mock';
import { ALPHA_LEVELS } from '@app/modules/leaderboard/mocks/level.mock';
import { STUDENTS } from '@app/modules/leaderboard/mocks/student.mock';
import { Leaderboard } from '@app/modules/leaderboard/models/leaderboard.model';
import { Level } from '@app/modules/leaderboard/models/level.model';
import { Student } from '@app/modules/leaderboard/models/student.model';
import {
  getLastDateOfWeekByFirstDate,
  inRange,
} from '@app/modules/leaderboard/utils/leaderboard.utils';


export const DELAY = 2000;

export class LeaderboardServiceMock {
  loadLevels(): Observable<Level[]> {
    return of(ALPHA_LEVELS).pipe(delay(DELAY));
  }

  loadStudents(): Observable<Student[]> {
    return of(STUDENTS).pipe(delay(DELAY));
  }

  loadLeaderboardDataByLevel(level: string, weekDate?: Date): Observable<Leaderboard[]> {
    const leaderboards = LEADERBOARDS.map(leaderboard => {
      return {
        ...leaderboard,
        report: leaderboard.report
          .filter(entry => entry.level === level && inRange(weekDate, getLastDateOfWeekByFirstDate(weekDate), entry.date))
      };
    });

    return of(leaderboards).pipe(delay(DELAY));
  }
}
