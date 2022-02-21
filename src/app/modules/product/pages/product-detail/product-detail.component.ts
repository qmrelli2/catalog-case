import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApiCall } from '@app/interfaces/api-call';
import { FavoriteService } from '@app/modules/favorite/services/favorite.service';
import { environment } from '@environments/environment';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-detail-page',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {
  product_id: string | null;
  productDetail!: IProduct;

  imageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private favoriteService: FavoriteService
  ) {
    this.product_id = '';

    this.imageUrl = '';
  }

  ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('product_id');

    if (this.product_id) this.getProductDetail();
  }

  getProductDetail() {
    let apiCall: IApiCall = {
      path: 'products/' + this.product_id,
    };

    this.productService.productDetail(apiCall).subscribe((res) => {
      this.productDetail = res;

      this.imageUrl = environment.apiUrl + this.productDetail.productImage;
    });
  }

  addToFavorite() {
    let apiCall: IApiCall = {
      body: {
        productId: this.productDetail.id,
      },
    };

    this.favoriteService.addFavorite(apiCall).subscribe((res) => {
      console.log(res);

      this.productDetail.isFavorite = true;
    });
  }

  categoryNameConverter(id: number) {
    let cats = JSON.parse(localStorage.getItem('categories')!);

    return cats[id];
  }
}
