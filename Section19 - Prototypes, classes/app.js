// PROTOTYPES - are an Object that comes with all other objects to store all methods.
// Array.prototype.YELL = () => {
//     console.log(this * 2);
// }
// String.prototype.MULTIPLY = () => {
//     return this*=2
// }

// OOP INTRODUCTIOn

// const navColor = new Color('carrot', [230,126,34])
// const logoColor = new Color('emerald', [46,204,113])


// Factory functions - THERES A BETTER WAY this is making functions/methods for your function. Constructor functions is better practice
// Factory functions are not reusable when made inside the function. Having a function outside would even be better
// function hex(r,g,b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// hex(255,100,25);
// "#ff6419"
// function rgb(r,g,b) {
//     return `rgb(${r}, ${b}, ${g})`;
// }
// "rgb(255, 25, 100)"


// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function() {
//         const {r,g,b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35,255,1 50);
// firstColor.hex()

// CONSTRUCTOR FUNCTIONS - MORE CONVENTIONAL THAN FACTORY FUNCTIONS - Capital first letter
// Creates a blank, plain JS Object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from the step 1 as this AudioContext;
// Returns this if the function doesn't return its own object;

// Behind the scenes, the constructor is making an object, and adding the 'this' to it, and then returning the object behind the scenes.
// We don't have to implicitly return the object

// This is much shorter and reusable code
// function Color(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this);
// }
// // This adds the contructor and the methods to the prototype instead of inside the object
// Color.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// // You can put in extra params for the method to accept
// Color.prototype.rgba = function(a=1.0) {
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(123,232,23)

// CLASSES syntactical sugar. - THIS IS ALOT LIKE PYTHON except using 'this' instead of 'self'
// When defining a class the constructor keyword is a must - it runs immediatly when instantiated
// For each method, it does need to be assigned with this keyword - Down below i deconstructed it
class Color {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // THIS LINE CUTS DOWN ON CODE. IF YOU AHVE REPETITION IN YOUR METHODS, MAKE A METHOD TO CUT DOWN ON THIS USING 'this' KEYWORD
    innerRGB() {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    greet() {
        return `HELLO FROM ${this.name} THis is a method in the class!`
    }
}

const c1 = new Color(2,2,3, 'tomato');