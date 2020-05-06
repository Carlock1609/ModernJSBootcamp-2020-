// How asynch callbacks work

const btn = document.querySelector('button');

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

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right
    const currLeft = element.getBoundingClientRect().left
    if(elRight + amount > bodyBoundary) {
        onFailure()
    } else {
        setTimeout(() => {
            element.style.transform = `translateX(${currLeft + amount}px)`
            onSuccess()
        }, delay)
    }

}

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000)
//             })
//         })
//     })
// })

moveX(btn, 100, 1000, () => {
    // success
    moveX(btn, 400, 1000, () => {
        // succes
        moveX(btn, 700, 1000), () => {
            console.log('REALLY WE SITLL HAVE SCREEN LEFT??')
        }, () => {
            // fail
            alert('CANNOT MOVE FUTHER')
        }
    }, () => {
        //fail
        alert('CANNNOT MOVE FURTHER')
    })
}, () => {
    // fail
    alert('CANNNOT MOVE FURTHER')
})