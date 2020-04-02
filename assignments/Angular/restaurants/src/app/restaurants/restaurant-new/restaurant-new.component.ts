import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services';
import { Restaurant } from '../../restaurant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css'],
})
export class RestaurantNewComponent implements OnInit, OnDestroy {
  restaurant: Restaurant = new Restaurant();
  sub: Subscription;
  errorMessage: string;

  @Output() createRestaurant = new EventEmitter<Restaurant>();

  constructor(
    private readonly restaurantService: RestaurantService,
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
    this.sub = this.restaurantService
      .createRestaurant(this.restaurant)
      .subscribe(
        restaurant => {
          console.log('Adding Restaurant:', restaurant.name);
          this.restaurant = new Restaurant();
          this.router.navigateByUrl('/');
          form.reset();
        },
        error => {
          console.log('error', error);
          this.errorMessage = error.statusText;
        }
      );
  }

  onCreate() {}
}
