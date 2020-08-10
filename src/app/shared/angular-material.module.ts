import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  exports: [
    CommonModule,
    MatSelectModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
})
export class AppAngularMaterialModule {}
