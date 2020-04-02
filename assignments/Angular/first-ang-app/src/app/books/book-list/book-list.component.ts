import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../book';

import { BookService } from '../../services';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit, OnDestroy {
  selectedBook: Book;
  books: Array<Book> = [];
  filter: Book = new Book(false);
  sub: Subscription;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.sub = this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.books.forEach(book => {
        book.author = this.titleize.transform(book.author);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectBook(book: Book): void {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(event) {
    console.log('creating book', event);
    this.books.push(event);
  }

  clearFilter(): void {
    this.filter = new Book(false);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  onDelete(bookToDelete: Book) {
    console.log('deleting book');
    this.bookService.deleteBook(bookToDelete).subscribe(deletedBook => {
      console.log('deleted book', deletedBook);

      this.books = this.books.filter(book => book.id !== deletedBook.id);
    });
  }
}
