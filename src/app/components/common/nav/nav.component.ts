import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  navList: any[] = [];

  ngOnInit() {
    this.navList = [{
      label: 'Issue List',
      url: ['/list']
    }, {
      label: 'Shopping Cart',
      url: ['/cart']
    }, {
      label: 'Rxjs demos',
      url: ['/rxjs']
    }, {
      label: 'Tweenmax demos',
      url: ['/tweenmax']
    }];
  }

}
