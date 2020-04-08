const myStudents = [
    {
        firstName: 'bob',
        grade: 50,
    },
    {
        firstName: 'larry',
        grade: 92,
    },
    {
        firstName: 'susan',
        grade: 100,
    },
    {
        firstName: 'jon',
        grade: 76,
    },
];

// for(let i = myStudents.length-1; i > 0;i--) {
//     console.log(`${myStudents[i].firstName} got a ${myStudents[i].grade}`)
// }



// Reveresed words
// const word = 'hello';
// let reversedWord = ''
// for(let i = word.length-1; i >= 0;i--) {
//     reversedWord += word[i]
// }
// console.log(reversedWord)

// let list1 = [7,2,3]

// for(let num in list1) {
//     console.log(num*2)
// }

// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for(let i = 0; i < words1.length;i++) {
//     console.log(words1[i] + words2[i])
// }

const movieReviews = {
    name1: 2,
    name2: 6,
    name3: 9,
}

for(let movie of Object.keys(movieReviews)) {
    console.log(`${movie} Rating of ${movieReviews[movie]}`)
}