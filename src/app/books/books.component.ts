import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/BookInterface';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  booksArray: Book[] = [];

  constructor(private booksService: BooksService) {}
  cart: Book[] = [];


  isShowing: boolean = true;

  ngOnInit(): void {
    this.booksArray = this.booksService.getBooks();
  }
}
