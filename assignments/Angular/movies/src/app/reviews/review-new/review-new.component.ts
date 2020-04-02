import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { ReviewService, MovieService } from '../../services';

import { Review } from '../../review';
import { Movie } from '../../movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css'],
})
export class ReviewNewComponent implements OnInit {
  @Input() movie: Movie;
  review: Review = new Review();
  form: NgForm;
  sub: Subscription;
  errorMessage: string;

  @Output() createReview = new EventEmitter<Review>();
  // @Output() getMovie = new EventEmitter<Movie>();

  constructor(
    private router: Router,
    private readonly reviewService: ReviewService,
    private readonly movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const movie = params.get('movie_id');
          return this.movieService.getMovie(movie);
        })
      )
      .subscribe(movie => (this.movie = movie));
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.sub = this.reviewService.createReview(this.review).subscribe(
      review => {
        this.movie._id = review.movie;
        console.log('adding review', review.movie);
        this.review = new Review();
        this.router.navigateByUrl('/');
        form.reset();
      },
      error => {
        console.log('error', error);
        this.errorMessage = error.statusText;
      }
    );
  }
}
