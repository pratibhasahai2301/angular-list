import { Component, Input } from '@angular/core';

import { User } from '@app/core/models/user.model';
import { ReportCardDisplayResults } from '@app/modules/leaderboard/models/report-card-display-results.model';


@Component({
  selector: 'app-leaderboard-table',
  styleUrls: [ './leaderboard-table.component.scss' ],
  templateUrl: './leaderboard-table.component.html',
})
export class LeaderboardTableComponent {
  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: ReportCardDisplayResults[];

  @Input()
  currentUser: User;
}
