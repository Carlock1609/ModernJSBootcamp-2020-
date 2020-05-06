// How asynch callbacks work

// RAFACTORED CODE AT BOTTOM FOR MOVE BTN
// const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)   
// }, 1000)

// OR

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right
//     const currLeft = element.getBoundingClientRect().left
//     if(elRight + amount > bodyBoundary) {
//         onFailure()
//     } else {
//         setTimeout(() => {
//             element.style.transform = `translateX(${currLeft + amount}px)`
//             onSuccess()
//         }, delay)
//     }

// }

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000)
//             })
//         })
//     })
// })

// moveX(btn, 100, 1000, () => {
//     // success
//     moveX(btn, 400, 1000, () => {
//         // succes
//         moveX(btn, 700, 1000), () => {
//             console.log('REALLY WE SITLL HAVE SCREEN LEFT??')
//         }, () => {
//             // fail
//             alert('CANNOT MOVE FUTHER')
//         }
//     }, () => {
//         //fail
//         alert('CANNNOT MOVE FURTHER')
//     })
// }, () => {
//     // fail
//     alert('CANNNOT MOVE FURTHER')
// })

// PROMISES EXAMPLE
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random()
            if(rand < 0.5) {
                resolve()
            } else {
                reject()
            }
        }, 5000)
    })
}
makeDogPromise()
    .then(() => {
        console.log('YAY WE GOT A DOG!')
    })
    .catch(() => {
        console.log('NO DOG:(')
    })

// AWESOME EXAMPLE WALK THROUGH IT
// Resolving / Rejecting /w values
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {id: 1, username: 'Bilbo'},
                    {id: 5, username: 'Elsa'},
                ],
                '/about': 'This is an about page'
            }
            const data = pages[url]
            if(data) {
                resolve({status: 200, data})
            } else {
                reject({status: 404})
            }ß
        }, 3000)
    } )
}
fakeRequest('/users')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Status Code', res.data)
        console.log('IT WORKED')
    })
    .catch((res) => {
        console.log(res.status)
        console.log('NOPE')
    })


// PROMISE CHAINGING

const fakeRequest1 = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};
// Chaining chaos example! THERES A BETTER WAY
// fakeRequest1('/users')
//     .then((res) => {
//         const id = res.data[0].id
//         fakeRequest1(`/users/${id}`)
//         .then((res) => {
//             const postID = res.data.topPostId
//             fakeRequest1(`/posts/${postID}`)
//             .then((res) => {
//                 console.log(res.data.title)
//             })
//         })
//     })
//     .catch((err) => {
//         console.log('OH NO!', err)
//     })

// BETTER WAY WITHOUT NESTING
fakeRequest1('/users')
    .then((res) => {
        const id = res.data[0].id
        return fakeRequest1(`/users/${id}`)
    })
    .then((res) => {
        const postID = res.data.topPostId
        return fakeRequest1(`/posts/${postID}`)
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log('OH NO!', err)
    })


// REFACTORING WITH PROMISES
// REFACTORING MOVING BUTTON FROM TOP

const btn = document.querySelector('button')

const moveX = (element, amount, delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right
            const currLeft = element.getBoundingClientRect().left
            if(elRight + amount > bodyBoundary) {
                // passing params to use for err
                reject({bodyBoundary, elRight, amount})
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`
                resolve()
                }
        }, delay)
    })
}

moveX(btn, 300, 1000)
    .then(() => {
        return moveX(btn, 300, 1000)
    })
    .then(() => {
        return moveX(btn, 300, 1000)
    })
    .then(() => {
        return moveX(btn, 300, 1000)
    })
    .then(() => {
        console.log('DONE WITH BOTH')
    })
    .catch((data) => {
        console.log(`Body is ${data.bodyBoundary}`)
        console.log(`Element is at ${data.elRight}px, ${data.amount}px is too large!`)
    })