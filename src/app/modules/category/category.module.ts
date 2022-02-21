import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/ui/ui.module';

//  Page
import { CategoryDetailPageComponent } from './pages';

// Components
import {
  CategoryProductListComponent,
  CategoryProductListItemComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, UIModule],
  exports: [],
  declarations: [
    // Pages
    CategoryDetailPageComponent,

    // Components
    CategoryProductListComponent,
    CategoryProductListItemComponent,
  ],
  providers: [],
})
export class CategoryModule {}
