import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApiCall } from '@app/interfaces/api-call';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'category-detail-page',
  templateUrl: 'category-detail.component.html',
  styleUrls: ['category-detail.component.scss'],
})
export class CategoryDetailPageComponent implements OnInit {
  category_id: string | null;
  categoryDetail!: ICategory;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.category_id = '';
  }

  ngOnInit() {
    this.category_id = this.route.snapshot.paramMap.get('category_id');

    if (this.category_id) this.getCategoryDetail();
  }

  getCategoryDetail() {
    let apiCall: IApiCall = {
      path: 'categories/' + this.category_id,
    };

    this.categoryService.categoryDetail(apiCall).subscribe((res) => {
      this.categoryDetail = res;
    });
  }
}
