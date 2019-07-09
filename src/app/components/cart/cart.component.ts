import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  issueList: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartInfo();
  }

  getCartInfo() {
    this.issueList = this.cartService.getList();
  }

  onClickClear() {
    this.cartService.clearCart();
    this.getCartInfo();
  }

}
