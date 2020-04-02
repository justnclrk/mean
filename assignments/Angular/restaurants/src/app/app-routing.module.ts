import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromRestaurants from './restaurants';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full',
  },
  {
    path: 'restaurants',
    children: [
      {
        path: '',
        component: fromRestaurants.RestaurantListComponent,
      },
      {
        path: 'new',
        component: fromRestaurants.RestaurantNewComponent,
      },
      {
        path: ':restaurant_id',
        component: fromRestaurants.RestaurantDetailComponent,
      },
      {
        path: ':restaurant_id/review',
        component: fromRestaurants.RestaurantReviewComponent,
      },
      {
        path: ':restaurant_id/edit',
        component: fromRestaurants.RestaurantEditComponent,
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
