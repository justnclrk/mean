import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Review } from '../review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private base = '/api/reviews';

  constructor(private http: HttpClient) {}

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.base, review);
  }
}
