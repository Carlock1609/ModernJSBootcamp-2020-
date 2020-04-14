//  CALL STACKS - TAKE FROM THE TOP NOT THE BOTTOM OR ITLL ALL CRASH AND FALL
//  THINK OF IT WHEN YOU USE FUNCTIONS WITHIN FUNCTIONS, THAT FUNCTION NEEDS TO FINISH FIRST
// THEN THE FUNCTION WILL RETURN ITS VALUE AND GIVE IT TO THE OTHER SO IT CAN FINISH

// CALL STACK DEBUGGING WITH DEV TOOLS
const repeat = (str, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};

makeRant('I hate Mayonnaise', document.body);
makeRant('If you ahve to cough, Please cover your mouth', document.body);

