import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Restaurant } from '../../restaurant';
import { Review } from '../../review';

import { RestaurantService } from '../../services';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: Array<Restaurant> = [];
  reviews: Array<Review> = [];
  selectedRestaurant: Restaurant;
  updatedRestaurant: Restaurant;
  createdReview: Review;
  sub: Subscription;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.sub = this.restaurantService
      .getRestaurants()
      .subscribe(restaurants => {
        this.restaurants = restaurants;
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  selectRestaurant(restaurant: Restaurant): void {
    console.log('selecting restaurant', restaurant);
    this.selectedRestaurant =
      this.selectedRestaurant === restaurant ? null : restaurant;
  }

  onCreate(event) {
    this.restaurants.push(event);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  updateRestaurant(restaurant: Restaurant): void {
    this.updatedRestaurant =
      this.updatedRestaurant === restaurant ? null : restaurant;
  }

  onDelete(restaurantToDelete: Restaurant) {
    this.restaurantService
      .deleteRestaurant(restaurantToDelete)
      .subscribe(deletedRestaurant => {
        console.log('restaurant removed from database!', deletedRestaurant);

        this.restaurants = this.restaurants.filter(
          restaurant => restaurant._id !== deletedRestaurant._id
        );
      });
  }
}
