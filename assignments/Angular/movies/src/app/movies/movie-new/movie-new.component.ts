import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { MovieService } from '../../services';
import { Movie } from '../../movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css'],
})
export class MovieNewComponent implements OnInit, OnDestroy {
  movie: Movie = new Movie();
  sub: Subscription;

  @Output() createMovie = new EventEmitter<Movie>();

  constructor(
    private readonly movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.sub = this.movieService.createMovie(this.movie).subscribe(movie => {
      console.log('Adding Movie:', movie.title);
      this.movie = new Movie();
      this.router.navigateByUrl('/');
      form.reset();
    });
  }

  onCreate() {}
}
