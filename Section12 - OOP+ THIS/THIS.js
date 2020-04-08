// SHORTHAND Object Props
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total, currVal) => total + currVal);
    const avg = sum / arr.length;
    // return {
    //     max: max,
    //     min: min,
    //     sum: sum,
    //     avg: avg,
    // }
    // or
    return {
        max,
        min,
        sum,
        avg,
    }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

const stats = getStats(reviews);

// COMPUTED PROPERTIES
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron'

// const team = {};
// team[role] = person;
// team[role2] = person2;
// or Less typing
const team = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen',
}

// function addProp(obj, k, v) {
//     const copy = {...obj};
//     copy[k] = v;
//     return copy
// }
// or
const addProp = (obj, k, v) => {
    return {...obj, [k]: v}
}

const res = addProp(team, 'happy', ':)')



// ADDING METHODS TO OBJECTS
const math = {
    numbers: [1,2,3,4,5],
    add: function(x,y) {
        return x + y
    },
    multiply: function(x,y) {
        return x * y
    },
}

// METHOD SHORTHAND SYNTAX
const auth = {
    login() {
        console.log('LOGGED YOU IN')
    }
}