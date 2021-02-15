console.log("Hello World!")

//ES 5
var x1 = 1;

// ES 6
let x2 = 1;
const x3 = x2;

let x4 = x2 +

// int addNumbers(int a, int b)

function addNumbers(a, b) {
    return a + b;
}

console.log("add numbers: " + addNumbers(22, 32));

x = addNumbers(5, 6);

let otherFunction = addNumbers;
x = otherFunction(22, 56);
console.log("x: " + x);

// JSON
let personA = {
                name: "Kaitlyn",
                email: "kaitlyn.kottlowski@my.simpson.edu"
                };

console.log(personA);
console.log(personA.name);
console.log(personA['name']);

// ES6 class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }

    fullName() {
        return this.name + " " + this.email;
    }
}

let personB = PersonB();
personB.name = "Nick";
personB.email = "nickwaz98@gmail.com";
console.log(personB);
console.log(personB.fullName());

// ES5 class - reference if seen on stack overflow
var personD = {
    firstName: "Bri",
    lastName: "Marquez",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(personD.fullName());

// For loops look like java

var personF = {name: "Emma", email: "emmakott11@gmail.com"}

for (let field in personF) {
    console.log(field + " = " + field);
}

// Compare integers use ==
// Compare strings use ===