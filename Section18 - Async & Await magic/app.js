// ASYNC functions
function getData() {
    const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
        console.log(data)
    })
    // This doesnt work because were trying to do something when its pending. You have to do .then like above to do something after its resolved
    console.log(data)
}
// getData()


// **Async Keyword
// async function greet() {
//     return 'HELLO'
// }
// greet().then((val) => {
//     console.log('PROMISE RESOLVED WITH: ', val)
// })

// SHORTER VERSION
async function add(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers'
    }
    return x + y
}

// WITHOUT ASYNC MANUAL
// function add(x,y) {
//     return new Promise((resolve, reject) => {
//         if(typeof x !== 'number' || typeof y !== 'number') {
//             reject('X and Y must be numbers')
//         }
//         resolve(x + y)
//     })
// }

add(4, 5)
    .then(val => {
        console.log('PROMISED RESOLVED WITH: ', val)
    })
    .catch((err) => {
        console.log('PROMISE REJECTED WITH: ', err)
    })


// AWAIT keyword**

// Worse way
// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets/')
// }

// getPlanets().then((res) => {
//     console.log(res.data)
// })

// EASIER way

// This way waits until promise is resolved, therefor we dont need .then
// This is syntatic surgar just to make it easier to read.
// async function getPlanets() {
//     const res = await axios.get('https://swapi.dev/api/planets/')
//     console.log(res.data)
// }

// getPlanets().catch((err) => {
//     console.log('IN CATCH', err)
// })


// OR try, except, This works the same but more specific than catching all
async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/')
        console.log(res.data)
    } catch(e) {
        console.log('IN CATCH', e)
    }
}
// getPlanets()


// REFACTORED BUTTON CODE TO USE ASYNC/AWAIT

// const btn = document.querySelector('button')

// const moveX = (element, amount, delay) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const bodyBoundary = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right
//             const currLeft = element.getBoundingClientRect().left
//             if(elRight + amount > bodyBoundary) {
//                 // passing params to use for err
//                 reject({bodyBoundary, elRight, amount})
//             } else {
//                 element.style.transform = `translateX(${currLeft + amount}px)`
//                 resolve()
//                 }
//         }, delay)
//     })
// }

// async function animateRight(el, amt) {
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
//     await moveX(el,amt,1000)
// }
// animateRight(btn, 100).catch((err) => {
//     console.log('ALL DONE')
//     // THIS ONLY WORKS AND GOES BACK IF CATCH IS EXECUTED
//     animateRight(btn, -100);
// })



// PARALLEL Vs. SEQUENTIAL REQUESTS

// SUQUENTIAL REQUEST
// async function get3Pokemon() {
//     // THIS WILL RUN IN ORDER, AWAIT MEANS IT WILL NOT MOVE ON UNTIL ITS RESOLVED, TEHY ARE GETTING SENT ONE AT A TIME AND ONCE RETURNED
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//     console.log(poke1.data)
//     console.log(poke2.data)
//     console.log(poke3.data)
// }

// PARALLEL REQUEST - ITS BETTER TO BE PARALLEL
async function get3Pokemon() {
    // THIS WILL RUN IN ORDER, AWAIT MEANS IT WILL NOT MOVE ON UNTIL ITS RESOLVED, TEHY ARE GETTING SENT ONE AT A TIME AND ONCE RETURNED
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    // We are awaiting resolved value below, and storing it to that variable
    // Await means its waiting till its resolved.
    const poke1 = await prom1
    const poke2 = await prom2
    const poke3 = await prom3
    console.log(poke1.data)
    console.log(poke2.data)
    console.log(poke3.data)
}
// get3Pokemon()


// DIFFERENCES BETWEEN PARRELEL/SEQUENTIAL
function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}
// changeBodyColor('yellow', 3000)
// THIS IS PARRELEL, MORE DESIRABLE BECAUSE IT RUNS AT THE SAME TIME RATHER THAN SEQUENTIAL
async function lightShow() {
    const p1 = changeBodyColor('yellow', 1000)
    const p2 = changeBodyColor('blue', 1000)
    const p3 = changeBodyColor('brown', 1000)
    const p4 = changeBodyColor('grey', 1000)
    await p1
    await p2
    await p3
    await p4
}
// lightShow()

// const pokeList = []
// const pokeNames = []

// async function callPokemonAPI() {
//     const getPokeList = await axios.get('https:/pokeapi.co/api/v2/pokemon/')

//     pokeList.push(getPokeList.data.results)
//     return new Promise(pokeList)
// }
// callPokemonAPI()
//     .then((res) => {
//         for(let names of res) {
//             console.log(names)
//         }
//     })

async function get3Pokemon() {
    // THIS WILL RUN IN ORDER, AWAIT MEANS IT WILL NOT MOVE ON UNTIL ITS RESOLVED, TEHY ARE GETTING SENT ONE AT A TIME AND ONCE RETURNED
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    // We are awaiting resolved value below, and storing it to that variable
    // Await means its waiting till its resolved.
    const poke1 = await prom1
    const poke2 = await prom2
    const poke3 = await prom3
    // Promise.all takes promises and puts them into an array.
    const results = await Promise.all([poke1, poke2, poke3])
    console.log(results)
    printPokemon(results)
}

function printPokemon(results) {
    for(let pokemon of results) {
        console.log(pokemon.data.name)
    }
}
get3Pokemon()