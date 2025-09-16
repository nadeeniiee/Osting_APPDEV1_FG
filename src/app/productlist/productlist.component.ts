import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productlist',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  title = 'LAB6_Osting';
  product = [
  {
    id: 1,
    name: "Laptop",
    price: 4000,
  },
  {
    id: 2,
    name: "Phone",
    price: 5000,
    },
  {
    id: 3,
    name: "Camera",
    price: 7000,
    },
  {
    id: 4,
    name: "Headphones",
    price: 9000,
   },
  ]
}
