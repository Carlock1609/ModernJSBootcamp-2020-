// forEach functions
const numbers = [20,21,22,23,24,25,26,27];

// numbers.forEach(function(num) {
//     console.log(num*2);
// });
function printTriple(n) {
    console.log(n*3);
};
// numbers.forEach(printTriple);

// i Is the index like in for i
// numbers.forEach(function(num, i) {
//     console.log(i, num);
// });

const books = [
        {
            title: 'Good Omens',
            authors: ['James who', 'James aruther'],
            rating: 3.24,
            genres: ['fiction', 'fantasy'],
    },
        {
            title: 'Hungames',
            authors: ['Bob Hope'],
            rating: 6.14,
            genres: ['sexy', 'holy'],
    },
        {
            title: 'Bible',
            authors: ['seth degayner'],
            rating: 9.22,
            genres: ['dark', 'romantic'],
    },
        {
            title: 'Redwall',
            authors: ['Luke Shaques'],
            rating: 9.40,
            genres: ['fiction', 'romantic'],
    },
];
// books.forEach(function(book) {
//     console.log(book.title.toUpperCase());
//     console.log(book.authors.join().toUpperCase());
//     console.log(book.rating);
// });



// MAPPING
const words = ['asap', 'byob', 'rsvp','diy',]
const doubles = numbers.map(function (num) {
    return num * 2
})

// const numDetail = numbers.map(function(n) {
//     console.log({
//         value: n,
//         isEven: n % 2 === 0,
//     })
// })

const doubles2 = numbers.map(function(n) {
    return n*2
})
// console.log(doubles2)

const wordsDetail = words.map(function(word) {
    return word.toUpperCase().split('').join('.')
})
// console.log(wordsDetail)

const bookTitles = books.map(function(b) {
    return b.title;
})
// console.log(bookTitles)



// ARROW FUNCTIONS
// const square = function(x) {
//     return x * x;
// }
const square = (x) => {
    return x * x
}
// one argument - optional* no parens
const isEven = num => {
    return num % 2 === 0;
}
// two argument - needs parens
const multiply = (x,y) => {
    return x * y
}
// no arguement - needs parens
const greet = () => {
    console.log('hello')
}



// ARROW FUNCTIONS IMPLICIT RETURNS
// const square = (n) => {
//     return n*n;
// }
// IF YOU USE PARENS YOU DONT NEED RETURN. TREAT AS RETURN
const square1 = (n) => (
    n*n
)
// ONE LINER NOT SUGGESTED UNLESS SHORT
// const square = n => n * n;

const nums = [1,2,3,4,5,6,7,8]
const doubles1 = nums.map(function (n) {
    return n * 2;
})

const doubles3 = nums.map(n => {
    return n * 2
})
const doubles4 = nums.map(n => n * 2)

const parityList1 = nums.map(function(n) {
    if(n % 2 === 0) return 'even';
    return 'odd';
})
const parityList2 = nums.map(n => {
    if(n % 2 === 0) return 'even';
    return 'odd'
})
const parityList3 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'))


// FIND METHOD

let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds',
]

const movie = movies.find(movie => {
    return movie.includes('Deeds')
})
const movie2 = movies.find(m => 
    m.indexOf('Mrs') === 0
)


const goodBook = books.find(b => b.rating >= 4.3)
const nameBook = books.find(b => b.authors.includes('Bob Hope'))

// postMessage.find(p => p.id === 2)

// FILTERS ******
const nums1 = [34,35,67,54,109,102,32,9];
const odds = nums1.filter(n => n % 2 === 1);
const evens = nums1.filter(n => n % 2 === 0);
const bigNums = nums1.filter(n => n > 50);

const higherRating = books.filter(book => book.rating > 4);
const fantasyBooks = books.filter(book => book.genres.includes('fantasy'));
const shortForm = books.filter(book => book.genres.includes('sexy') || book.genres.includes('fantasy'))

const query = 'Hungames';
// const results = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
// OR
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
})

// EVERY - every element needs to "be"
const words1 = ['dog', 'dit', 'log', 'bag', 'wag']

const all3Lets = words1.every(word => word.length === 3) 
const allGWords = words1.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
})

// SOME - LIKE EVERY just needs some or one
const someStartD = words1.some(word => word[0] === 'd')
const allGoodBooks = books.every(book => book.rating > 3)
const moreAuthors = books.some(book => book.authors.length === 2)

// SORT
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// need ot use slice() so it will save
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a)

const sortAscRating = books.sort((a,b) => a.rating - b.rating)
const sortDescRating = books.sort((a,b) => b.rating - a.rating)

// REDUCE
const nums4 = [3,4,5,6,7]
const product = nums4.reduce((total, currentValue) => {
    return total * currentValue
})
// MORE REDUCE
const grades = [87,64,96,92,88,99,73,70,64]
const maxGrade = grades.reduce((max, currentValue) => {
    if(currentValue > max) return currentValue;
    return max; 
})
const maxGrade1 = grades.reduce((max, currentValue) => {
    return Math.max(max, currentValue)
})
const minGrade1 = grades.reduce((min, currentValue) => {
    return Math.min(min, currentValue)
})
// Array.reduce(callback, initialValue)
// sum is accumulator
// third arguement is the starting point for accumulator
const sum = [10,20,30,40,50].reduce((sum, currentValue) => {
    return sum + currentValue;
}, 100)

const votes = ['y','y','n','y','n','y','n','y','n','n','n','y','y'];
const results1 = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {})
//  OR
const results3 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})

const groupedByRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) {
        groupedBooks[key] = [];
    }
    groupedBooks[key].push(book)
    return groupedBooks
}, {})