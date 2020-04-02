import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Restaurant } from '../restaurant';
import { Review } from '../review';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private base = '/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.base);
  }
  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.base}/${id}`);
  }
  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.base, restaurant);
  }
  createReview(review: Review): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.base, review);
  }
  editRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.base}/${id}/edit`);
  }
  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(
      `${this.base}/${restaurant._id}/edit`,
      restaurant
    );
  }
  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.base}/${restaurant._id}`);
  }
}
