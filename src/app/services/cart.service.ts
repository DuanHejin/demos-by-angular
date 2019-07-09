import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private issueList: any[] = [];

  constructor() { }

  addToCart(issue) {
    window.alert(`You have successfully add the ${issue.name} to the cart!`);
    this.issueList.push(issue);
  }

  clearCart() {
    this.issueList = [];
  }

  getList(): any[] {
    return this.issueList;
  }
}
