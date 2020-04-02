import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { PetService } from '../../services';
import { Pet } from '../../pet';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  pet: any = {};
  form: NgForm;
  sub: Subscription;
  updatedPet: Pet;

  @Output() updatePet = new EventEmitter<Pet>();

  constructor(
    private router: Router,
    private petService: PetService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('pet_id');
          console.log(id);
          return this.petService.getPet(id);
        })
      )
      .subscribe(pet => (this.pet = pet));

    // this.route.params.subscribe(pet => {
    //   for (let id = 0; id < this.pet.length; id++) {
    //     if (this.pet[id].id === pet.id) {
    //       this.pet = this.pet.id;
    //       break;
    //     }
    //   }
    // });
  }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.sub = this.petService.updatePet(this.pet).subscribe(pet => {
      console.log('updated', pet);
      this.router.navigateByUrl(`/pets/${this.pet._id}`);
      form.reset();
    });
  }
}
