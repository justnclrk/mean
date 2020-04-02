import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from '../../pet';

import { PetService } from '../../services';

import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;
  pets: Array<Pet> = [];
  sub: Subscription;

  constructor(
    private router: Router,
    private petService: PetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('pet_id');
          console.log(id);
          return this.petService.getPet(id);
        })
      )
      .subscribe(pet => (this.pet = pet));
  }
  onDelete(petToDelete: Pet) {
    this.petService.deletePet(petToDelete).subscribe(deletedPet => {
      console.log('pet adopted', deletedPet);
      this.pets = this.pets.filter(pet => pet._id !== deletedPet._id);
      this.router.navigateByUrl('/');
    });
  }
}
