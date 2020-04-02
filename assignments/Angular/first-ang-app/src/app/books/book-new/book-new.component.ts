import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { BookService } from '../../services';
import { Book } from '../../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  book: Book = new Book();
  sub: Subscription;

  @Output() createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private router: Router
  ) {} // readonly optional

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form);

    this.sub = this.bookService.createBook(this.book).subscribe(book => {
      console.log('book from api', book);
      // this.createBook.emit(this.book);
      this.router.navigateByUrl('/');
      this.book = new Book();
      form.reset();
    });

    // this.books.push(this.book);

    // console.log('books', this.books);
  }

  onCreate() {
    console.log('creating book');
  }
}
