import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 200, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 300, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 400, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Produit 5', description: 'Description du produit 5', price: 500, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Produit 6', description: 'Description du produit 6', price: 600, imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Produit 7', description: 'Description du produit 7', price: 700, imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Produit 8', description: 'Description du produit 8', price: 800, imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Produit 9', description: 'Description du produit 9', price: 900, imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Produit 10', description: 'Description du produit 10', price: 1000, imageUrl: 'https://via.placeholder.com/150' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
