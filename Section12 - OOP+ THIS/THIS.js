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
    username: 'TommyBoy',
    login() {
        console.log('LOGGED YOU IN')
    },
    logout() {
        console.log('GOODBYE')
    },
}


// ***** Keyword THIS *****************

function sayHi() {
    console.log('HI');
    console.log(this);
}

const greet = function() {
    console.log(this);
}

// *THIS* IN METHODS - ARROW FUNCTIONS CAN'T USE *KEYWORD* THIS
const person1 = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {first, last, nickName} = this;
        return `${first} ${last} aka ${nickName}`;
    },
    printBio() {
        console.log(this)
        const fullName = this.fullName()
        console.log(`${fullName} is a person!`)
    },
    laugh: () => {
        console.log(this)
        console.log(`${this.nickName} says HAHAHAH`)
    }
}


// THIS: INVOCATION CONTEXT
const printBio = person1.printBio;

//  ANNOYOMATIC DEMO
const annoyer = {
    phrases : ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't stop, Won't Stop"],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId)
        console.log('PHEW THANK HEAVENS THAT IS OVER')
    }
}

// annoyer.start()
// annoyer.stop()

// PUTTING IT TOGETHER, DECK OF CARDS

// v1
// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts','diamonds','spades','clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for(let value of values.split(',')) {
//         for(let suit of suits) {
//             deck.push({value, suit})
//         }
//     }
//     return deck;
// }

// function drawCard(deck) {
//     return deck.pop()
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck)

// const myDeck = {
//     drawCard() {
//         const card = this.deck.pop()
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple(numCards) {
//         const cards = [];
//         for(let i = 0; i < numCards; i++) {
//             cards.push(this.drawCard());
//         }
//         return cards;
//     },
//     shuffle() {
//         const {deck} = this;
//         for(let i = deck.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// }

// v2
// THIS VERSION IS BETTER BECAUSE WE ARE RETURNING A FUNCTION INSTEAD
// THIS MAKES IT SO WE CAN HAVE MULTIPLE DECKS, THE OTHER WAS JUST ONE
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts','diamonds','spades','clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {suits, values, deck} = this;
            for(let value of values.split(',')) {
                for(let suit of suits) {
                    deck.push({value, suit});
                }
            }
        },
        drawCard() {
            const card = this.deck.pop()
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = [];
            for(let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const {deck} = this;
            for(let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        },
    }
}


const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck()