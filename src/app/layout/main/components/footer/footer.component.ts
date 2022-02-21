import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class MainFooterComponent implements OnInit {
  year: Number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {}
}
