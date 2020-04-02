import { RestaurantService } from './restaurant.service';
import { ReviewService } from './review.service';

export const services: any[] = [RestaurantService, ReviewService];

export * from './restaurant.service';
export * from './review.service';
