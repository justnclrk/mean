const myNum: number = 5;
const myString: string = "Hello Universe";
let myArr: number[];
const myObj = {name: 'Bill', x: 2, y: 5};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
let arrayOne: boolean[];
let arrayTwo: any[];
myObj.x = 5; myObj.y = 10;
// object constructor
class myNode {
    val: number;

    constructor(_priv: number){
        this.val = _priv;
    }
    // doSomething(){
    //     this._priv = 10;
    // }
}
let myNodeInstance = new myNode(10);
console.log(myNodeInstance.val);
// function myFunction(val: string, x: string): any {
//     console.log(val)
//     return "Hello World";
// }
function sendingError(message: string): never{
    throw new Error("Error Message");
}