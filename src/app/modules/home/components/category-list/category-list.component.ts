import { Component, OnInit } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';
import { ICategory } from '@app/modules/category/interfaces/category';
import { CategoryService } from '@app/modules/category/services/category.service';

@Component({
  selector: 'home-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.scss'],
})
export class HomeCategoryListComponent implements OnInit {
  categoryList: ICategory[];
  constructor(private categoryService: CategoryService) {
    this.categoryList = [];
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    let apiCall: IApiCall = {};
    this.categoryService.fetchCategories(apiCall).subscribe((res) => {
      this.categoryList = res;

      let arr: any = {};

      this.categoryList.forEach((c) => {
        arr[c.id] = c.name;
      });

      localStorage.setItem('categories', JSON.stringify(arr));
    });
  }
}
