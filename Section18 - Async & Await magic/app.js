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
async function getPlanets() {
    const res = await axios.get('https://swapi.dev/api/planets/')
    console.log(res.data)
}

getPlanets()