import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Pages
import { MainLayoutComponent } from './pages';

// Components
import { MainNavbarComponent } from './components';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [],
  declarations: [
    // Pages
    MainLayoutComponent,

    // Components
    MainNavbarComponent,
  ],
  providers: [],
})
export class MainModule {}
