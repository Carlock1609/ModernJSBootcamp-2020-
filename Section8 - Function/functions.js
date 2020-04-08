function rollDie() {
    let roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll)
}
// for(let i = 0; i < 10;i++) {
//     rollDie()
// }

function throwDies(roll) {
    for(let i = 0; i < 3;i++) {
        rollDie()
    }
};
// throwDies(3)

function square(num) {
    console.log(num*num)
}
// square(4)

function getUsername() {
    let username = 'Carlock1609';
    return username;
};
function getPassword() {
    let password = 'Yatesboy906';
    return password;
};

// function isValidPassword(password, username) {
//     if(password.length < 8) {
//         console.log('INVALID TO SHORT!');
//         return false;
//     } ;
//     if(password.indexOf(' ') !== -1) {
//         console.log('INVALID CONTAINS SPACE');
//         return false;
//     };
//     if(password.indexOf(username) !== -1) {
//         console.log('INVALID CONTAINS PASSWORD');
//         return false;
//     };
//     return true
// };
// console.log(isValidPassword(getPassword(), getUsername()));


// IS PASSWORD CORRECT LAB
function isValidPassword(password, username) {
    if (
        password.length < 8 ||
        password.indexOf(' ') !== -1 ||
        password.indexOf(username)
    ) {
        return false;
    }
    return true;
}
// console.log(isValidPassword(getPassword(), getUsername()))

// V1 AVERAGE NUMBERS
// function findAverage(array) {
//     let total = 0
//     for(let i = 0; i < array.length;i++) {
//         total += array[i];
//     }
//     console.log(total / array.length)
// }
// V2 average
function findAverage(array) {
    let total = 0
    for(let num of array) {
        total += num;
    }
    console.log(total / array.length)
}
// findAverage([2,4,5,4,6])

// PANGRAM
function isPangram(pangram) {
    let letterList = [];
    let pangramList = 'abcdefghijklmnopqrstuvwxyz';

    for(let letter of pangram) {
        letterList.push(letter)
    }
    for(let letter of pangramList) {
        if(letterList.indexOf(letter) === -1) {
            console.log(pangramList[pangramList.indexOf(letter)])
            console.log('Not a pangram')
            return false;
        } else {
            console.log(`${letter} is in pangramList`)
            continue
        }
    };
    console.log('This is a pangram')
    return true
};
// isPangram('the five boxing wizards jump quickly'.toLowerCase())

// GET CARD
function getCard() {
    const deck = {
        suits: ['Clubs', 'Spades', 'Spades', 'Hearts','Diamonds'],
        cards: {
            '1': 'A',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': 'J',
            '12': 'Q',
            '13': 'K',
        }
    }
    let randomCard =  (Math.floor(Math.random() * 12 + 1))
    let randomSuit =  (Math.floor(Math.random() * 4))
    console.log(`You drew a ${deck.cards[randomCard]} of ${deck.suits[randomSuit]}`)
}
// getCard()
 
