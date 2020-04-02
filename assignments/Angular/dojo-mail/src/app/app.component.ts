import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emailOne: any = ['justin@aol.com', false, 'Chips and Salsa', 'Cant get enough'];
  emailTwo: any = ['sam@gmail.com', true, 'Target', 'Cant get enough'];
  emailThree: any = ['scarlet@hotmail.com', true, 'Cat Poop', 'Cant get enough'];
  emailFour: any = ['kitten@netscape.net', false, 'The Downfall of Man', 'Cant get enough'];

}
