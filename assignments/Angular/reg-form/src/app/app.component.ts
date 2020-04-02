import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form);
    form.reset();
  }
}
