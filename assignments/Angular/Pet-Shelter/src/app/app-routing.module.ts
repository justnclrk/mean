import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromPets from './pets';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full',
  },
  {
    path: 'pets',
    children: [
      {
        path: '',
        component: fromPets.PetListComponent,
      },
      {
        path: 'new',
        component: fromPets.PetNewComponent,
      },
      {
        path: ':pet_id',
        component: fromPets.PetDetailComponent,
      },
      {
        path: ':pet_id/edit',
        component: fromPets.PetEditComponent,
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
