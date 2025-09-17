import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, Product } from '../cart/cart.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  allProducts: Product[] = [
    { id: 1, name: "Pro Laptop", price: 75000, stock: 8 },
    { id: 2, name: "Smartphone X", price: 48000, stock: 15 },
    { id: 3, name: "DSLR Camera", price: 35000, stock: 5 },
    { id: 4, name: "Wireless Headphones", price: 9500, stock: 25 },
    { id: 5, name: "Smart Watch", price: 15000, stock: 12 },
    { id: 6, name: "Gaming Mouse", price: 3500, stock: 0 },
  ];
  
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.filteredProducts = [...this.allProducts];
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    // You could add a user notification here (e.g., a toast message)
  }

  filterProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}