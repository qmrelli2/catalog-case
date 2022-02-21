import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IApiCall } from '@app/interfaces/api-call';
import { FavoriteService } from '@app/modules/favorite/services/favorite.service';
import { IProduct } from '@app/modules/product/interfaces/product';
import { environment } from '@environments/environment';

@Component({
  selector: 'category-product-list-item',
  templateUrl: 'product-list-item.component.html',
  styleUrls: ['product-list-item.component.scss'],
})
export class CategoryProductListItemComponent implements OnInit {
  @Input() product!: IProduct;

  @HostListener('click')
  onClick() {
    this.router.navigate(['product/' + this.product.id]);
  }

  imageUrl: string;

  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {
    this.imageUrl = '';
  }

  ngOnInit() {
    this.imageUrl = environment.apiUrl + this.product.productImage;
  }

  addToFavorite() {
    let apiCall: IApiCall = {
      body: {
        productId: this.product.id,
      },
    };

    this.favoriteService.addFavorite(apiCall).subscribe((res) => {
      console.log(res);

      this.product.isFavorite = true;
    });
  }

  categoryNameConverter(id: number) {
    let cats = JSON.parse(localStorage.getItem('categories')!);

    return cats[id];
  }
}
