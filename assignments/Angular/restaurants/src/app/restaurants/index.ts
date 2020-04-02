import { RestaurantNewComponent } from './restaurant-new/restaurant-new.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';

export const components: any[] = [
  RestaurantDetailComponent,
  RestaurantListComponent,
  RestaurantNewComponent,
  RestaurantEditComponent,
  RestaurantReviewComponent,
];

export * from './restaurant-new/restaurant-new.component';
export * from './restaurant-list/restaurant-list.component';
export * from './restaurant-detail/restaurant-detail.component';
export * from './restaurant-edit/restaurant-edit.component';
export * from './restaurant-review/restaurant-review.component';
