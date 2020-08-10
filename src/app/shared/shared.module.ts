import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeaderboardTableComponent } from '@app/shared/components/leaderboard-table/leaderboard-table.component';
import { AppAngularMaterialModule } from '@app/shared/angular-material.module';

const SHARED_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  AppAngularMaterialModule
];

const SHARED_COMPONENTS: any[] = [LeaderboardTableComponent];

const SHARED_PIPES: any[] = [];

const SHARED_DIRECTIVES: any[] = [];

/**
 * The shared module is used to hold all reusable components across the app's
 * different modules. It imports and exports reusable modules to make them
 * readily available to other feature modules just by importing the shared
 * module, avoiding repetition. Since the shared module is meant to be imported
 * by all feature-modules, it shouldn't provide any service.
 */
@NgModule({
  declarations: [ ...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_DIRECTIVES ],
  exports: [ ...SHARED_MODULES, ...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_DIRECTIVES ],
  imports: SHARED_MODULES,
  providers: [ ...SHARED_PIPES ],
})
export class SharedModule {
}
