import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  getCart = () => {
    return this.cartService.get();
  };
  
  ngOnInit(): void {}
}
