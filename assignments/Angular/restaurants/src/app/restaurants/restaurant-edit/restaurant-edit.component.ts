import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services';
import { Restaurant } from '../../restaurant';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css'],
})
export class RestaurantEditComponent implements OnInit {
  restaurant: any = {};
  form: NgForm;
  sub: Subscription;
  updatedRestaurant: Restaurant;
  errorMessage: string;

  @Output() updateRestaurant = new EventEmitter<Restaurant>();

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('restaurant_id');
          console.log(id);
          return this.restaurantService.getRestaurant(id);
        })
      )
      .subscribe(restaurant => (this.restaurant = restaurant));
  }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.sub = this.restaurantService
      .updateRestaurant(this.restaurant)
      .subscribe(
        restaurant => {
          console.log('updated', restaurant);
          this.router.navigateByUrl(`/restaurants/${this.restaurant._id}`);
          form.reset();
        },
        error => {
          console.log('error', error);
          this.errorMessage = error.statusText;
        }
      );
  }
}
