import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];


  addToCart(product: Product): void {
      this.cart.push(product);
      console.log(`Produit ajouté : ${product.name}`);
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    console.log('Panier vidé.');
  }

  // Obtenir le nombre total d'articles dans le panier
  getTotalItems(): number {
    return this.cart.length;
  }
}
