import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from '../../../base-layout';

@Component({
  selector: 'main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainLayoutComponent extends BaseLayoutComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
