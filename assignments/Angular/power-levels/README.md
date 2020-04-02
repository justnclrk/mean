Power Levels
Create an app which a user can input a power level value between 1-100 in the input tag. Present the user 6 sections that use the power level value, multiply it by a specific multiplier and display the adjusted value.

For this assignment, we can store the value of the power in our PowerComponent, and we can use the @Input() feature to pass our power level into each of the sub components. The Sub components may now take the inputted power level, manipulate it and present it on the template.

Reference the wire frame for details.

We can create 1 sub component and reuse it for each of the 6 different sections.

REMINDER: When building applications which include forms, be sure to import the 'FormsModule' in your AppModule file (referenced in the 'Installation & CLI' chapter).