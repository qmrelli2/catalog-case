import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/ui/ui.module';

//  Page
import { ProductDetailPageComponent } from './pages';

// Components

@NgModule({
  imports: [CommonModule, UIModule],
  exports: [],
  declarations: [
    // Pages
    ProductDetailPageComponent,
  ],
  providers: [],
})
export class ProductModule {}
