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
