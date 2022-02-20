import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';

@NgModule({
  imports: [CommonModule, HomeModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class ModulesModule {}
