import { Component, Input, OnInit } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';
import { IProduct } from '@app/modules/product/interfaces/product';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'favorite-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class FavoriteProductListComponent implements OnInit {
  favoriteProductsList: IProduct[];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteProductsList = [];
  }

  ngOnInit() {
    this.getFavoriteProducts();
  }

  getFavoriteProducts() {
    let apiCall: IApiCall = {};

    this.favoriteService.fetchFavorites(apiCall).subscribe((res) => {
      this.favoriteProductsList = res;
    });
  }
}
