import { Injectable } from '@angular/core';
import { Book } from '../interface/BookInterface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<Book> = [];

  constructor() {}

  add = (book: Book) => {
    console.log(book)
    this.cart.push(book);
  };

  remove = (book: Book) => {
    // Although this syntax is confusing, we go push through.
    this.cart = this.cart.filter(b => b !== book)
  }

  get = () => {
    return this.cart;
  }
}


