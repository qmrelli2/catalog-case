import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/ui/ui.module';

//  Page
import { HomePageComponent } from './pages';

// Components
import {
  HomeCategoryListComponent,
  HomeCategoryListItemComponent,
  HomeSliderComponent,
} from './components';

@NgModule({
  imports: [CommonModule, UIModule],
  exports: [],
  declarations: [
    // Pages
    HomePageComponent,

    // Components
    HomeSliderComponent,
    HomeCategoryListComponent,
    HomeCategoryListItemComponent,
  ],
  providers: [],
})
export class HomeModule {}
