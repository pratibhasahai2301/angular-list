import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ loadChildren: () => import('app/modules/leaderboard/leaderboard.module')
    .then(m => m.LeaderboardModule), path: '' }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
