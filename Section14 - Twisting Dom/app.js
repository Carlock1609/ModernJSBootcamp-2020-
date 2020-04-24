// MORE DOM

// INNERTEXT AND TEXTCONTENT AND INNERHTML
// DIFFERENCE IS
// Inner text is just the text and thats it!
// Textcontent includes other things other than text that could be there

// innerHTML gives all the tags and the text... You could rewrite tags -
// You could write everything in innerHTML

// let input1 = document.querySelector("input[type='text']")
// undefined
// input1
// <input type=​"text" placeholder=​"Bear Name">​
// input1["placeholder"]
// "Bear Name"
// input1["placeholder"] = 'Fuck me'
// "Fuck me"

// OR

// input1.getAttribute('placeholder')
// "Fuck me"
// input1.setAttribute('placeholder', 'Username')
// undefined


// for(let ele of ul.children) {
//     console.log(ele)
// }

// CHANGING MULTPLE ELEMENTS

// const allLis = document.querySelectorAll('li')

// for(let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'WE ARE THE CHAMPIONS'
// }

// for(let li of allLis) {
//     li.innerHTML = 'WE ARE <b> THE CHAMPIONS <b>'
// }


// ALTERING STYLES

// const h1 = document.querySelector('h1');

// const p = document.querySelector('p');
// p.style.color = 'green'
// p.style.backgroundColor = 'black'
// p.style.fontSize = '50px'

// const allLis = document.querySelectorAll('li')
// const colors = ['red','blue','yellow','black','purple','green']

// // for(let i = 0; i < allLis.length; i++) {
// //     li.style.color = `${colors[i]}`
// // }
// allLis.forEach((el, i) => {
//     const color = colors[i];
//     el.style.color = color
// })


// MANIPULATING CLASSES
// const todo = document.querySelector('#todos .todo')

// // todo.style.color = 'gray'
// // todo.style.textDecoration = 'line-through'
// // todo.style.opacity = '50%'
// // OR
// todo.setAttribute('class', 'done')
// // HOW TO CHECK IF TAG HAS ATTRIBUTE CLASS, 'INCLUDES'
// todo.classList.toggle('done')
// todo.classList.toggle('done')
// if(todo.setAttribute('class').includes('done')) {
//     todo.classList.toggle('done')
// }

// CREATING ELEMENTS

const newh2 = document.createElement('h2');
newh2.innerText = 'I like animals'
newh2.classList.add('special')