import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { FavoriteModule } from './favorite/favorite.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ProductModule,
    CategoryModule,
    FavoriteModule,
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class ModulesModule {}
