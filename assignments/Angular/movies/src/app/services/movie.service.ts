import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private base = '/api/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.base);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}`);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.base, movie);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${movie._id}`);
  }
}
