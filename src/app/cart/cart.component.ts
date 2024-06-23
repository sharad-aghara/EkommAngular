// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    try {
      const response = await this.cartService.getCartItems();
      this.cartItems = response.cart;
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }

  getProductPrice(cartItem: any): number {
    return cartItem.product.prodPrice * cartItem.quantity;
  }
}