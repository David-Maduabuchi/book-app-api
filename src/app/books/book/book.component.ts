import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Book } from '../../interface/BookInterface';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  @Input() eachDiffBook: Book = {} as Book;
  
  addToCart = () => {
    this.cartService.add(this.eachDiffBook);
    this.isInCart = true;
  };

  removeFromCart = () => {
    this.cartService.remove(this.eachDiffBook);
    this.isInCart = false;
  }

  ngOnDestroy(): void {}
}
