import { Bear } from './bear.model'

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

const bear = new Bear(3)
if(bear instanceof Bear) {
    console.log('Hwllo from TypeScript')
}

/*Arrays*/
const example1: string[] = ['Hello World'];

const example2: (number | boolean)[] = [1, 2, true];

const example3: boolean[][] = [[true, false]];

/* Tuples */

const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30]

/* Enums */
import {Age} from './age.enum'
import {Names} from './name.enum'
function totalAge(age1: Age, age2: Age) {
    return age1 + age2
}
/* Objects */
const example6: object = {}

const example7: object = undefined

//an empty object:
const example8: {} = {}

/* Parameters */
import {Person} from './person.model'
function add(val1: number, val2: number): number {
    return val1 + val2
}
add(1, 3)

function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}`
}
sayHello(new Person({firstName: 'Dylan'}))

//return type when nothing is being returned:
function voidExample(): void {
    add(1,2)
}

//return type when returning an error
function neverExample(): never {
    throw Error
}

/* Custom Types */
type person = {firstName: string}

const example9: person = {firstName: 'Dollan'}

example9.firstName = 'Dylan'


