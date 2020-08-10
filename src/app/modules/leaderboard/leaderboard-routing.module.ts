import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardComponent } from '@app/modules/leaderboard/pages/leaderboard.component';

const pipelinesRoutes: Routes = [
  { path: '', component: LeaderboardComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(pipelinesRoutes) ],
})
export class LeaderboardRoutingModule {
}
