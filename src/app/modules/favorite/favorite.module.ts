import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pages
import { FavoritePageComponent } from './pages';

// Components
import {
  FavoriteProductListComponent,
  FavoriteProductListItemComponent,
} from './components';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [
    // Pages
    FavoritePageComponent,

    // Components
    FavoriteProductListComponent,
    FavoriteProductListItemComponent,
  ],
  providers: [],
})
export class FavoriteModule {}
