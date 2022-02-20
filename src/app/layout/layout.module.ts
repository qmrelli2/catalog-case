import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Base
import { BaseLayoutComponent } from './base-layout';

// Modules
import { MainModule } from './main/main.module';

@NgModule({
  imports: [CommonModule, RouterModule, MainModule],
  exports: [],
  declarations: [BaseLayoutComponent],
  providers: [],
})
export class LayoutModule {}
