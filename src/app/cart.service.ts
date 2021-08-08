import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* プロパティ */
  items: Product[] = [];

  /* コンストラクタ */
  constructor() { }

  /* メソッド */
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}