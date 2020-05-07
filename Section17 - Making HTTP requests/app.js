// INTRO TO AJAX

// JSON + XML

// XML
/* <name>
    <first>Jon</first>
    <last>Yates</last>
</name>
<email>Jcyates906@gmail.com</email>
// SAME AS JSON
{
    name: {
        'first': 'Jon',
        'last': 'Yates',
    },
    email: 'Jcyates906@outlook.com'
} */


// XMLHttpRequests: The Basics

// const firstReq = new XMLHttpRequest()

// // THIS keyword does not work with arrow functions
// firstReq.addEventListener('load', function() {
//     console.log('FIRST REQEUST WORKED')
//     const data = JSON.parse(this.responseText)
//     const filmURL = data.results[0].films[0]
//     const filmReq = new XMLHttpRequest()
//     filmReq.addEventListener('load', function() {
//         console.log('SECOND REQEUST WORKED')
//         const filmData = JSON.parse(this.responseText)
//         console.log(filmData)
//     })
//     filmReq.addEventListener('error', function(err) {
//         console.log('error!', err)
//     })
//     filmReq.open('GET', filmURL)
//     filmReq.send()
//     // for(let planet of data.results) {
//     //     console.log(planet.name)
//     // }
// })

// firstReq.addEventListener('error', () => {
//     console.log('ERROR')
// })

// firstReq.open("GET", "https://swapi.dev/api/planets/")
// firstReq.send()
// console.log('Request Sent!')


// FETCH an easier way + CHAINS
// const checkStatusAndParse = (response) => {
//     if(!response.ok) {
//         // This throw goes to your .catch - its linked
//         throw new Error(`Status Code Error: ${response.status}`)
//     }
//     return response.json()
// }

// const printPlanets = (data) => {
//     for(let planet of data.results) {
//         console.log(planet.name)
//     }
//     // REASON why we do this is because the next .then requires a promise, so we make one, and pass in data to the automatic resolve
//     return Promise.resolve(data.next)
// }

// const fetchNextPlanets = (url) => {
//     return fetch(url)
// }

// const prom = fetch('https://swapi.dev/api/planets/')
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((error) => {
//         console.log('SOMETHINGS WRONG!')
//         console.log(error)
//     })


// RECOMMENDED WAY - AXIOS

// const res = axios.get('https://swapi.dev/api/planets/')
axios.get('https://swapi.dev/api/planets/')
    .then((res) => {
        console.log(res.data.results[0])
    })
    .catch((err) => {
        console.log(err)
    })