import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  standalone: true,
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [CommonModule],
})
export class OrderComponent {
  cart: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((total, product) => total + product.price, 0);
  }

  confirmOrder() {
    alert('Commande confirmée ! Merci pour votre achat.');
    this.cartService.clearCart(); // Implémenter cette méthode dans CartService.
    this.cart = [];
    this.total = 0;
  }
}
