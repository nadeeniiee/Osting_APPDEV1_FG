import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem, CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  getTotal(cart: CartItem[]): number {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}