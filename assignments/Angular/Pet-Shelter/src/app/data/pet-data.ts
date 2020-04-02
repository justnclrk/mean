import { Pet } from '../pet';

export const PETS: Pet[] = [
  // {
  //   id: randomId(),
  //   name: 'steve',
  //   type: 'Cat',
  //   description: 'Black',
  //   skillOne: 'Jumping',
  //   skillTwo: 'Finding',
  //   skillThree: 'Noises',
  // },
  // {
  //   id: randomId(),
  //   name: 'scarlet',
  //   type: 'dog',
  //   description: 'Red',
  //   skillOne: 'Loyalty',
  //   skillTwo: '',
  //   skillThree: '',
  // },
  // {
  //   id: randomId(),
  //   name: 'kitten',
  //   type: 'Cat',
  //   description: 'Orange',
  //   skillOne: 'Hiding',
  //   skillTwo: 'Plotting',
  //   skillThree: '',
  // },
  // {
  //   id: randomId(),
  //   name: 'squirrel',
  //   type: 'Rodent',
  //   description: 'Jack-Ass',
  //   skillOne: '',
  //   skillTwo: '',
  //   skillThree: '',
  // },
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
