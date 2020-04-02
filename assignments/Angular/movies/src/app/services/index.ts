import { MovieService } from './movie.service';
import { ReviewService } from './review.service';

export const services: any[] = [MovieService, ReviewService];

export * from './movie.service';
export * from './review.service';
