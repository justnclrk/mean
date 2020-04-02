import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { RestaurantService, ReviewService } from '../../services';

import { Review } from '../../review';
import { Restaurant } from '../../restaurant';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css'],
})
export class RestaurantReviewComponent implements OnInit {
  @Input() restaurant: Restaurant;
  selectedRestaurant: Restaurant;
  review: Review = new Review();
  form: NgForm;
  sub: Subscription;
  errorMessage: string;

  @Output() createReview = new EventEmitter<Review>();
  @Output() getRestaurant = new EventEmitter<Restaurant>();

  constructor(
    private router: Router,
    private readonly restaurantService: RestaurantService,
    private readonly reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const restaurant = params.get('restaurant_id');
          return this.restaurantService.getRestaurant(restaurant);
        })
      )
      .subscribe(restaurant => (this.restaurant = restaurant));
  }

  selectRestaurant(restaurant: Restaurant): void {
    console.log('selected restaurant', restaurant);
    this.selectedRestaurant =
      this.selectedRestaurant === restaurant ? null : restaurant;
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.sub = this.reviewService
      .createReview(this.review)
      .subscribe(review => {
        console.log('Adding Review:', review);
        this.review = new Review();
        this.router.navigateByUrl(`/restaurants/${this.restaurant._id}`);
        form.reset();
      });
  }
}
