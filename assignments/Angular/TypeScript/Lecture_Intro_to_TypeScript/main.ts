let myString = 'this is a string';

myString = 'reassign';

const array: (boolean | string | number)[] = [9999, 'cat', 'dog'];

array.push('things');
array.push(5);
array.push(true);

const first: number = array[0] as number;

function printName(name: string): string {
    return `Hello ${name}`;
}

printName('Justin');

class User implements IUser {
    email: string;

    constructor(public name: string, public age: number) {
    }

    sayHello(name: string): void {
        console.log(`Hello, ${name}, I'm ${this.name}`)
    }
}

const user = new User('Justin', 29);

user.sayHello('Bob');

interface IUser {
    name: string;
    age: number;
    email: string;
}

class Person extends User {
    constructor(name: string, age: number) {
        super(name, age);
    }

}

const person = new Person('Person', 345);

const stringArray = ['1', '4', '00', '345'];

//generics
function map<T, TResult>(array: T[], callback: (element: T, index: number, array: T[]) => TResult) {
    const results: TResult[] = [];

    for (let index = 0; index < array.length; index++) {
        results.push(callback(array[index], index, array));
    }

    return results;
}

const results = map(stringArray, (element) => parseInt(element, 10));