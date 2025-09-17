import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
    { path: '', component: ProductlistComponent },
    { path: 'cart', component: CartComponent },
];