import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromMovies from './movies';
import * as fromReviews from './reviews';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: fromMovies.MovieListComponent,
      },
      {
        path: 'new',
        component: fromMovies.MovieNewComponent,
      },
      {
        path: ':movie_id',
        component: fromMovies.MovieDetailComponent,
      },
      {
        path: ':movie_id/review',
        component: fromReviews.ReviewNewComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'reviews',
    pathMatch: 'full',
  },
  {
    path: 'reviews',
    children: [
      {
        path: 'new',
        component: fromReviews.ReviewNewComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
