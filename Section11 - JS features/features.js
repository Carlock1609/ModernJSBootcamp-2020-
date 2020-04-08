//  DEFAULT PARAMS - COME AT THE END OF PARAMS OR ERROR
// DO THIS IF NO Y - OTHERWISE COMES BACK UNDEFINED
function multiply1(x, y) {
    if(typeof y === 'undefined') {
        y = 1;
    }
    return x * y
}

function multiply2(x, y) {
    y = typeof y === 'undefined' ? 1 : y
    return x * y
}
// THIS IS THE EASIEST EXAMPLE
function multiply3(x, y = 1) {
    return x * y
}

const greet = (person, greeting='hi') => {
    console.log(`${greeting}, ${person}!`)
}

const blah = (x,y=[1,2,3]) => {
    console.log(x,y);
}

// SPREAD - for function calls. using '...' iterates like a for loop except for params
let numbers1 = Math.max(3,4,5,6,7,12,19,33,3)
let numbers2 = Math.min(3,4,5,6,7,12,19,33,3)
const nums = [45,23,34,7,6]
// Math.max(nums)
// NaN
// Math.max(...nums)
// 45

function giveMeFour(a,b,c,d) {
    console.log('a', a)
    console.log('a', b)
    console.log('a', c)
    console.log('a', d)
}
const colors = ['red', 'orange', 'yellow', 'green']
// giveMeFour(...colors)

// SPREAD in ARRAY LITERALS
const cephalopods = ['dumbo octopus', 'humboldt squid', 'Flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];
// combining arrays - iterates and adds instead of having arrays
const mollusca = ['hi', ...cephalopods, ...gastropods]
const inverts = [...cnidaria, ...gastropods, cephalopods]
// So much easier than split
// console.log([...'abcde']) 

// SPREAD in OBJECT LITERALS
const feline = {
    legs: 4,
    family: 'Felidae',
};
const canine = {
    legs: 4,
    family: 'Caninae',
    furry: true,
};
const dog = {
    ...canine,
    isPet: true,
    adorable: true,
}
const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable',
}
// EVEN THOUGH BOTH HAVE LEGS, AS LONG AS THERE THE SAME ITS THE SAME PROPERTY FOR COMBINING
const catDog = {
    ...canine,
    ...houseCat,
}
// console.log({...[4,5,6]})
// {0: 4, 1: 5, 2: 6}


// REST - Arguements object - it is a reference within every function except arrow functions
function sum() {

    const argsArr = [...arguments]
    return argsArr.reduce((total, currVal) => {
        return total + currVal
    })
}
// arguments holds every param in an arrray
function fullName(first, last) {
    console.log(arguments[2])
    console.log(first)
}
// REST - PARAMS
function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}

const multiply5 = (...nums) => {
    return nums.reduce((total, currVal) => {
        return total * currVal
    })
}

// DESTRUCTURING Array - unpacking
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward',
];
// order matters - raceResults[0], [1], [2]
const [gold, silver, bronze] = raceResults;
// Use commas to pass through elements
const [second, , , fourth] = raceResults;
// using spread. shows winners and others [array]
const [winner, ...others] = raceResults;

// DESTRUCTURING Object - unpacking
const runner1 = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of Golden Heart'
};
const {first, last, ...others1} = runner1;

// NESTED DESTRUCTURING
const results = [{
        first1: 'Eliud',
        last1: 'Kipchoge',
        country: 'Kenya',
    },
    {
        first1: 'Laura',
        last1: 'Yates',
        country: 'America',
    },
    {
        first1: 'Bob',
        last1: 'Chang',
        country: 'China',
    },
]

const [{first1}, {country}] = results;

// PARAM DESTRUCTURING
// function print(person) {
//     const {first, last, title} = person;
//     console.log(`${first} ${last} ${title}`)
// }
function print({first, last, title}) {
    console.log(`${first} ${last} ${title}`)
}
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}