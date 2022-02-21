import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory } from '../../../category/interfaces/category';

@Component({
  selector: 'home-category-list-item',
  templateUrl: 'category-list-item.component.html',
  styleUrls: ['category-list-item.component.scss'],
})
export class HomeCategoryListItemComponent implements OnInit {
  @Input() category!: ICategory;

  @HostListener('click')
  onClick() {
    this.router.navigate(['category/' + this.category.id]);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
