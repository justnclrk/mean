import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { PetService } from '../../services';
import { Pet } from '../../pet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css'],
})
export class PetNewComponent implements OnInit, OnDestroy {
  pet: Pet = new Pet();
  sub: Subscription;

  @Output() createPet = new EventEmitter<Pet>();

  constructor(
    private readonly petService: PetService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting pet', this.pet);

    this.sub = this.petService.createPet(this.pet).subscribe(pet => {
      console.log('adding', pet);
      this.router.navigateByUrl('/');
      this.pet = new Pet();
      form.reset();
    });
  }

  onCreate() {
    console.log('adding pet');
  }
}
