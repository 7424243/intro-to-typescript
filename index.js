"use strict";
exports.__esModule = true;
var bear_model_1 = require("./bear.model");
// const arrayExample = [1, 3, 4, 5]
//same thing:
//const arrayExample: number[] = [1, 3, 4, 5]
// let example1: boolean = true;
// let example2: number;
// example2 = 35;
// let example3 = 'Hello World';
//same thing:
//let example3: string = 'Hello World';
//multiple types
// let example4: boolean | number = 35;
// let example5: undefined = undefined;
// let example6: null = null
var bear = new bear_model_1.Bear(3);
if (bear instanceof bear_model_1.Bear) {
    console.log('Hwllo from TypeScript');
}
/*Arrays*/
var example1 = ['Hello World'];
var example2 = [1, 2, true];
var example3 = [[true, false]];
/* Tuples */
var exampleTuple = ['https://www.YouTube.com/CodingTutorials360', 30];
function totalAge(age1, age2) {
    return age1 + age2;
}
/* Objects */
var example6 = {};
var example7 = undefined;
//an empty object:
var example8 = {};
/* Parameters */
var person_model_1 = require("./person.model");
function add(val1, val2) {
    return val1 + val2;
}
add(1, 3);
function sayHello(person) {
    return "Say Hello to My Little Friend, " + person.firstName;
}
sayHello(new person_model_1.Person({ firstName: 'Dylan' }));
//return type when nothing is being returned:
function voidExample() {
    add(1, 2);
}
//return type when returning an error
function neverExample() {
    throw Error;
}
var example9 = { firstName: 'Dollan' };
example9.firstName = 'Dylan';
var example10 = { firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan' };
example10.firstName = 'Dylan';
example10.middleName = 'Coding God';
example10.lastName = 'Israel';
var man;
var bear;
var pig;
var manBearPig;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;
/* Generics */
function example(arg) {
    return arg;
}
example(5);
/* Acess Modifiers */
var newBear = new bear_model_1.Bear({ name: 'Omega', tail: true });
newBear.claws = 3;
///newBear.name = '';//this gives an error because it is a readonly value
//newBear.tail = false;//this gives an error because tail can only be modified in the Bear class
newBear.add(1, 2);
