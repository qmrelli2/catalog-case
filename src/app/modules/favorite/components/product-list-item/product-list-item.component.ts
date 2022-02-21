import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IApiCall } from '@app/interfaces/api-call';
import { IProduct } from '@app/modules/product/interfaces/product';
import { ProductService } from '@app/modules/product/services/product.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'favorite-product-list-item',
  templateUrl: 'product-list-item.component.html',
  styleUrls: ['product-list-item.component.scss'],
})
export class FavoriteProductListItemComponent implements OnInit {
  @Input() product!: IProduct;

  @HostListener('click')
  onClick() {
    this.router.navigate(['product/' + this.product.id]);
  }

  imageUrl: string;

  constructor(private router: Router) {
    this.imageUrl = '';
  }

  ngOnInit() {
    this.imageUrl = environment.apiUrl + this.product.productImage;
  }

  categoryNameConverter(id: number) {
    let cats = JSON.parse(localStorage.getItem('categories')!);

    return cats[id];
  }
}
