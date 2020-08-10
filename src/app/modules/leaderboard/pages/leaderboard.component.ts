import {Component, OnDestroy, OnInit} from '@angular/core';

import {forkJoin, of, Subject} from 'rxjs';
import {finalize, switchMap, take, takeUntil} from 'rxjs/operators';

import {User} from '@app/core/models/user.model';
import {UserService} from '@app/core/services/user/user.service';
import {Leaderboard} from '@app/modules/leaderboard/models/leaderboard.model';
import {Level} from '@app/modules/leaderboard/models/level.model';
import {Student} from '@app/modules/leaderboard/models/student.model';
import {LeaderboardService} from '@app/modules/leaderboard/services/leaderboard.service';
import {getFirstDayOfWeek} from '@app/modules/leaderboard/utils/leaderboard.utils';

@Component({
  selector: 'app-leaderboard',
  styleUrls: ['./leaderboard.component.scss'],
  templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<null>();

  level: string;
  levels: Level[] = [];
  loading = false;
  currentUser: User;
  leaderboards: Leaderboard[] = [];
  weekDate: Date;
  leaderboardsCache: Leaderboard[] = [];
  weekSelect: Date[] = [];
  displayedColumns: string[] = ['rank', 'student', 'timeInMinutes'];
  students: Student[] = [];
  loadingReportCard = false;

  constructor(private leaderboardService: LeaderboardService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.loadWeeks();

    this.loading = true;
    forkJoin([
      this.leaderboardService.loadStudents(),
      this.leaderboardService.loadLevels(),
      this.userService.getCurrentUser(),
    ])
      .pipe(
        switchMap(([students, levels, currentUser]) => {
          this.students = students;
          this.levels = levels;
          this.currentUser = currentUser;
          this.level = this.levels && this.levels.length ? this.levels[0].value : undefined;

          return this.level ?
            this.leaderboardService.loadLeaderboardDataByLevel(this.level, new Date(this.weekDate)) :
            of(null);
        }),
        take(1), finalize(() => this.loading = false))
      .subscribe(response => {
        if (response) {
          this.leaderboardsCache = response;
          this.manipulateLeaderboardResponse();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLevelChange() {
    this.reloadLeaderboard();
  }

  onWeekLevelChange() {
    this.reloadLeaderboard();
  }

  loadWeeks() {
    // load data for weeks (Using last 2 weeks and current week)
    this.weekSelect.push(getFirstDayOfWeek(0));
    this.weekSelect.push(getFirstDayOfWeek(-1));
    this.weekSelect.push(getFirstDayOfWeek(-2));

    this.weekDate = this.weekSelect[0];
  }

  private reloadLeaderboard() {
    this.loadingReportCard = true;
    this.leaderboardService.loadLeaderboardDataByLevel(this.level, new Date(this.weekDate))
      .pipe(takeUntil(this.destroy$), finalize(() => this.loadingReportCard = false))
      .subscribe((response) => {
        this.leaderboardsCache = response;
        this.manipulateLeaderboardResponse();
      });
  }

  private manipulateLeaderboardResponse(): void {
    this.leaderboards = this.leaderboardsCache.map(leaderboard => {
      const sliceLength = leaderboard.report.length > 10 ? 10 : leaderboard.report.length;
      leaderboard.results = leaderboard.report
        .sort((a, b) => b.timeInMinutes - a.timeInMinutes)
        .slice(0, sliceLength)
        .map((entry, index) => {
          return {
            id: entry.id,
            timeInMinutes: entry.timeInMinutes,
            student: this.students.find(student => entry.studentId === student.id),
            rank: index + 1
          };
        });

      return leaderboard;
    });
  }
}
