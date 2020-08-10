import { NgModule } from '@angular/core';

import { LeaderboardComponent } from '@app/modules/leaderboard/pages/leaderboard.component';
import { LeaderboardRoutingModule } from '@app/modules/leaderboard/leaderboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [ LeaderboardComponent ],
  imports: [ LeaderboardRoutingModule, SharedModule ],
  providers: [],
})
export class LeaderboardModule {
}
