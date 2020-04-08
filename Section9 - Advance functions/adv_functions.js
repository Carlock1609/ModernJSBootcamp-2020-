
// INNER FUNCTIONS
function outer() {
    let movie = 'Amadues';
    console.log(movie)
    function inner() {
        let movie = 'The Shining';
        console.log(movie)

        function extraInner() {
            console.log(movie.toUpperCase())
        }
        extraInner();
    }
    inner();
}
// outer()

// FUNCTIONS EXPRESSIONS
const addition = function(num1,num2) {
    return num1 + num2
}
// console.log(addition(3,5))

// HIGHER ORDER FUNCTIONS
function add(a,b) {
    return a + b;
}
const subtract = function(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
const divide = function(a,b) {
    return a / b;
}
const operations = [add,subtract,multiply,divide]

// for(let func of operations) {
//    console.log(func(30,5))
// }

// FUNCTION ARGUMENTS
function callThreeTimes(f) {
    f();
    f();
    f();
}
function cry() {
    console.log('cryyyignignigngin')
}
function rage() {
    console.log('MAAD')
}
// callThreeTimes(cry)
// callThreeTimes(rage)

function repeatNTimes (action, num) {
    for(let i = 0; i < num; i++) {
        action();
    }
}
// repeatNTimes(rage, 2)
function pickOne(f1,f2) {
    let rand = Math.random();
    if(rand < 0.5) {
        f1();
    } else {
        f2();
    }
}
// pickOne(cry, rage)

// function return values
function multiplyBy(num) {
    return function(x) {
        return x * num
    }
}
// const triple = multiplyBy(3);
// const double = multiplyBy(2);
function makeBetweenFunc(x,y) {
    return function(num) {
        if(num > x && num < y) {
            return true;
        } else {
            return false;
        }
    }
}
const isChild = function(num) {
    return num >= 0 && num <= 18;
}
// console.log(isChild(20))
// console.log(makeBetweenFunc(3,6))

// FUNCTION CALLBACKS

function grumpus() {
    alert('GO AWAY!')
}
// setTimeout(grumpus, 5000)

const btn = document.querySelector('button');

// passing function
// btn.addEventListener('click', grumpus)
// OR
// Annoyomus function
btn.addEventListener('click', function() {
    alert('WHAT?!?!')
})


// HOISTING - VAR AND FUNCTION IS HOISTING - LET/CONST DOES NOT HOIST
// HOIST MEANS THAT IT DOESNT FOLLOW THE REGULAR TOP-BOTTOM READING, IT HOISTS THE REFERENCE FROM BELOW IF CALLED.
// var animal;
// console.log(animal)
// var animal = 'horse'

