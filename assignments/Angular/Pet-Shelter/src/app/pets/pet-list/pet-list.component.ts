import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pet } from '../../pet';

import { PetService } from '../../services';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
  providers: [TitleizePipe],
})
export class PetListComponent implements OnInit, OnDestroy {
  pets: Array<Pet> = [];
  selectedPet: Pet;
  updatedPet: Pet;
  sub: Subscription;

  constructor(private titleize: TitleizePipe, private petService: PetService) {}

  ngOnInit() {
    this.sub = this.petService.getPets().subscribe(pets => {
      this.pets = pets;
      this.pets.forEach(pet => {
        pet.name = this.titleize.transform(pet.name);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectPet(pet: Pet): void {
    console.log('selecting pet', pet);
    this.selectedPet = this.selectedPet === pet ? null : pet;
  }

  onCreate(event) {
    console.log('adding pet', event);
    this.pets.push(event);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  updatePet(pet: Pet): void {
    console.log('updating pet', pet);
    this.updatedPet = this.updatedPet === pet ? null : pet;
  }

  onDelete(petToDelete: Pet) {
    this.petService.deletePet(petToDelete).subscribe(deletedPet => {
      console.log('pet removed from database!', deletedPet);

      this.pets = this.pets.filter(pet => pet._id !== deletedPet._id);
    });
  }
}
