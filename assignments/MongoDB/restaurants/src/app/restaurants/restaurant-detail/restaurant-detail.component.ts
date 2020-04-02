import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../restaurant';
import { Review } from '../../review';

import { RestaurantService } from '../../services';

import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  @Input() restaurant: Restaurant;
  restaurants: Array<Restaurant> = [];
  review: any = [];
  reviews: Array<Review> = [];
  selectedRestaurant: Restaurant;
  sub: Subscription;

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('restaurant_id');
          return this.restaurantService.getRestaurant(id);
        })
      )
      .subscribe(restaurant => (this.restaurant = restaurant));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  selectRestaurant(restaurant: Restaurant): void {
    console.log('selecting restaurant for review:', restaurant.name);
    this.selectedRestaurant =
      this.selectedRestaurant === restaurant ? null : restaurant;
  }

  onDelete(restaurantToDelete: Restaurant) {
    this.restaurantService
      .deleteRestaurant(restaurantToDelete)
      .subscribe(deletedRestaurant => {
        console.log('DELETED!', deletedRestaurant);
        this.restaurants = this.restaurants.filter(
          restaurant => restaurant._id !== deletedRestaurant._id
        );
        this.router.navigateByUrl('/');
      });
  }
}
