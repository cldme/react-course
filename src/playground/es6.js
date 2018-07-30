// ES6 variables - let and const

var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar: ' + nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet: ' + nameLet);

const nameConst = 'Frank';
console.log('nameConst: ' + nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// Arrow Functions

// Normal function (es5)
const square = function(x) {
    return x * x;
};

console.log(square(8));

// Arrow function using regular syntax (es6/7)
// const squareArrow = (x) => {
//     return x * x;
// };

// Arrow function using the expression syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(4));

// Arrow function using regular syntax
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// Arrow function using the expression syntax
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

// Arguments object - no longer bound with arrow functions
const add = function(a, b) {
    // console.log(arguments); - this will not work with arrow functions
    return a + b;
}

console.log('add:' + add(10,1));

// this keywork - no longer bound with arrow functions
const user = {
    name: 'Claudiu',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());