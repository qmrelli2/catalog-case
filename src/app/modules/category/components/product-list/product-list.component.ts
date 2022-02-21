import { Component, Input, OnInit } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';
import { IProduct } from '@app/modules/product/interfaces/product';
import { ProductService } from '@app/modules/product/services/product.service';
import { ICategory } from '../../interfaces/category';

@Component({
  selector: 'category-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class CategoryProductListComponent implements OnInit {
  @Input() category!: ICategory;

  categoryProductsList: IProduct[];

  constructor(private productService: ProductService) {
    this.categoryProductsList = [];
  }

  ngOnInit() {
    this.getCategoryProducts();
  }

  getCategoryProducts() {
    let apiCall: IApiCall = {
      path: 'categories/' + this.category.id + '/products',
    };

    this.productService.fetchCategoryProducts(apiCall).subscribe((res) => {
      this.categoryProductsList = res;
    });
  }
}
