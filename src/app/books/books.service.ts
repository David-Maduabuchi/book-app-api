import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        author: 'Henry Bobs ',
        src: 'https://cdn.kobo.com/book-images/69327895-ab7d-45e0-a8a2-7956cf72091a/1200/1200/False/diary-of-a-wimpy-kid-diary-of-a-wimpy-kid-1.jpg',
        name: 'Diary of a Wimpy Kid',
        amount: 30.81,
      },
      {
        author: 'Mr Aculate',
        src: 'https://m.media-amazon.com/images/I/61Dx0-fwcuL._UX250_.jpg',
        name: 'The art of Being alone',
        amount: 18.87,
      },
      {
        author: 'Maduabuchi David Chinedu',
        src: 'https://www.stxnext.com/hs-fs/hubfs/STX%20Next%202020/blog/images/Python-Programming-for-Beginners-cover.jpg',
        name: 'Python programming',
        amount: 20.7,
      },
      {
        name: 'Complete Python Programming',
        author: 'Ratvasti Ginshaki',
        src: 'https://fivebooks.com/app/uploads/2018/04/0735619670.01.LZ_.jpg',
        amount: 32,
      },
    ]
  }
}

