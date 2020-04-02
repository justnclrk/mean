import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../movie';
import { Review } from '../../review';

import { MovieService } from '../../services';
import { ReviewService } from '../../services';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [TitleizePipe],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Array<Movie> = [];
  reviews: Array<Review> = [];
  selectedMovie: Movie;
  createdReview: Review;
  sub: Subscription;

  constructor(
    private titleize: TitleizePipe,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.sub = this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.movies.forEach(movie => {
        movie.title = this.titleize.transform(movie.title);
      });
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  selectMovie(movie: Movie): void {
    console.log('selecting movie', movie);
    this.selectedMovie = this.selectedMovie === movie ? null : movie;
  }

  onCreate(event) {
    this.movies.push(event);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  createReview(event): void {
    this.reviews.push(event);
  }

  onDelete(movieToDelete: Movie) {
    this.movieService.deleteMovie(movieToDelete).subscribe(deletedMovie => {
      console.log('movie removed from database!', deletedMovie);

      this.movies = this.movies.filter(movie => movie._id !== deletedMovie._id);
    });
  }
}
