import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../movie';
import { Review } from '../../review';

import { MovieService } from '../../services';

import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  @Input() movie: Movie;
  movies: Array<Movie> = [];
  review: any = [];
  reviews: Array<Review> = [];
  sub: Subscription;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('movie_id');
          console.log(id);
          return this.movieService.getMovie(id);
        })
      )
      .subscribe(movie => (this.movie = movie));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onDelete(movieToDelete: Movie) {
    this.movieService.deleteMovie(movieToDelete).subscribe(deletedMovie => {
      console.log(
        'Mr. Stark, that movie doesnt feel very good...',
        deletedMovie
      );
      this.movies = this.movies.filter(movie => movie._id !== deletedMovie._id);
      this.router.navigateByUrl('/');
    });
  }
}
