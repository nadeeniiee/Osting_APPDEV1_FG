import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: Product) {
    const currentCart = this.cart.getValue();
    const existingItem = currentCart.find(item => item.id === product.id);

    if (product.stock <= 0) {
      console.error(`${product.name} is out of stock.`);
      return; 
    }

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity += 1;
      } else {
        console.error(`Cannot add more of ${product.name}. Stock limit reached.`);
      }
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    this.cart.next([...currentCart]);
  }
}