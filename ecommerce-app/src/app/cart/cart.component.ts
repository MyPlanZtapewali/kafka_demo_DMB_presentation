import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }
}
