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
