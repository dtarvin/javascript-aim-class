let car = 'Mustang';
// console.log(car);

var total = 0;
total = total + 2;
total += 3;
total++;
// console.log(total);

// I want to say it's chilly if it's less than 40 degrees out

let temperature = 32;
if (temperature < 40) {
    // console.log('brrr...it is chilly');
}

temperature = 42;
if (temperature < 40) {
    // console.log('brrr...it is chilly');
}

temperature = 40;
if (temperature <= 40) {
    // console.log('brrr...it is chilly');
}

function checkTemperature(tempToday) {
    if (tempToday <= 40) {
        console.log('brrr...it is kinda chilly');
    }
}

// checkTemperature(40);
// checkTemperature(32);
// checkTemperature(55);

function checkCreditHealth(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log("I am in trouble");
    }
}

// checkCreditHealth(6000, 8);
// checkCreditHealth(5000, 8);
// checkCreditHealth(6000, 7);

function checkCreditHealth2(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log("I am in some trouble");
    } else {
        console.log("I am doing okay credit-wise");
    }
}

// checkCreditHealth2(6000, 8);
// checkCreditHealth2(5000, 8);
// checkCreditHealth2(6000, 6);

function pickHairColor(mood) {
    if (mood == "happy") {
        console.log("I want green hair today!")
    } else if (mood == "sad") {
        console.log("I want blue hair today");
    }
}

// pickHairColor("happy");
// pickHairColor("sad");
// pickHairColor("angry");

function checkGrade(score) {
    if (score >= 90) {
        console.log("I got an A!")
    } else if (score >= 80) {
        console.log("I got a B");
    } else if (score >= 70) {
        console.log("I got a C");
    } else if (score >= 60) {
        console.log("I got a D")
    } else {
        console.log("I FAILED!!!");
    }
}

// checkGrade(72);
// checkGrade(94);
// checkGrade(59);
// checkGrade(60);
// checkGrade(81);

function getTodaysClass(dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
            console.log('Today is science class');
            break;
        case "Tuesday":
            console.log('Today is Algebra');
            break;
        case "Wednesday":
            console.log('Today is science lab');
            break;
        case "Thursday":
            console.log('Today is History');
            break;
        case "Friday":
            console.log('Today is a study day');
            break;
        case "Saturday":
        case "Sunday":
            console.log("Hooray, it's the weekend!!!");
            break;
        default:
            console.log("You didn't give me a day of the week.");
    }
}

// getTodaysClass("Monday");
// getTodaysClass("Thursday");
// getTodaysClass("Sunday");

let fruits = ['apple', 'banana', 'orange', 'kiwi', 'watermelon'];

// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[5]);

function printFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`);
    }
}

// printFruits(fruits);

function printFruits2(fruits) {
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`);
    }
}

// printFruits2(fruits);

let cars = ['Audi', "Chrysler", "Ford", "Honda", "Subaru", "Toyota"];
// printFruits(cars);
// printFruits("hello");
// printFruits(22);

function isDivisibleByFive() {
    for (let i = 1; i <= 30; i += 3) {
        if (i % 5 == 0) {
            console.log(`${i} is divisible by 5`);
        } else {
            console.log(`${i} is not divisible by 5`);
        }
    }
}

// isDivisibleByFive();

let age = "25";

function sendMessageBasedOnAge(age) {
    switch (age) {
        case 25:
            console.log('Looking great!');
            break;
        case 50:
            console.log('Getting up there, you are');
            break;
        default:
            console.log('Man you are old!');
            break;
    }
}

// sendMessageBasedOnAge(age);

function containsletter(str) {
    let letter = 's';
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == letter) {
            console.log('Yes, at the ' + i + ' index position');
            break;
        } else if (i == str.length) {
            console.log('No');
        }
    }
}

// containsletter('Mesopotamia');

function countToTwentyWithoutThrees() {
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            continue;
        } else {
            console.log('i is ' + i);
        }
    }
}

// countToTwentyWithoutThrees();

function sayHi() {
    let name = prompt('What is your name?');
    console.log('Hi ' + name);
}

// sayHi();

// let num = prompt('Give me a number to count down from');
// while (num > 4) {
//     console.log('The number is ' + num);
//     num--;
// }
// console.log("I don't like to count 4 or below");

// let num = prompt('Give me a number to count down from');

// do {
//     console.log('The number is ' + num);
//     num--;
// } while (num > 4);
// console.log("I don't like to count 4 or below");

function getBalanceOfAccount(deposit, withdrawal) {
    let balance = deposit - withdrawal;
    return balance;
}

bal = getBalanceOfAccount(150, 100);

// console.log('Your balance is ' + bal);

let favoriteFood = function () {
    let name = prompt('What is your name?');
    if (name == 'David') {
        return 'tacos';
    } else {
        return 'pizza';
    }
}
// console.log('My favorite food is ' + favoriteFood());

var x = 10;
// console.log('x is ' + x);
// Step 1: var x;
// Step 2: x = 10;
// Step 3: console.log(x);

// console.log('y = ' + y);
var y = 20;
// Step 1: var y;
// Step 2: console.log(y);
// Step 3: y = 20;

// console.log('z = ' + z);
let z = 30;

// countTheMummies(20);

function countTheMummies(numOfMummies) {
    if (numOfMummies > 15) {
        console.log('I am going to die!!!');
    } else if (numOfMummies >= 1) {
        console.log('Maybe I can run away');
    } else {
        console.log('Thank goodness no mummies!');
    }
}

// countTheZombies(14);

var countTheZombies = function (numOfZombies) {
    if (numOfZombies > 15) {
        console.log('AAARRRGGGHHH ZOMBIES!!!');
    } else if (numOfZombies >= 1) {
        console.log('Too many zombies for my taste');
    } else {
        console.log('Whew! No zombies here!');
    }
}

// Global Scope with fruits array from earlier
function getGroceries(day) {
    if (day == "Wednesday") {
        console.log('I need to buy ' + fruits[2]);
    } else if (day == "Friday") {
        console.log('today I will buy ' + fruits[1] + ' and ' + fruits[4]);
    } else {
        console.log('Not shopping today');
    }
}

// getGroceries("Tuesday");
// getGroceries('Friday');
// getGroceries('Wednesday');

function getAreaOfHouse(length, width) {
    let area = length * width;
}

// getAreaOfHouse();
// console.log('The area of the house is ' + area);

// Function Scope
function functionScopeExample() {
    var depositAmount = 200;
    if (depositAmount < 10000) {
        var isInsured = true;
    }
    console.log('The deposit amount is ' + depositAmount);
    console.log('Is the deposit insured? ' + isInsured);
}

// functionScopeExample();

// Block Scope
function blockScopeExample(risk) {
    let depositAmount = 200;
    if (depositAmount < 10000) {
        let isInsured = true;
        if (risk == 1) {
            isInsured = false;
            console.log('what is isInsured?' + isInsured);
        }
        console.log('What is isInsured?' + isInsured);
    }
    console.log('The deposit amount is ' + depositAmount);
    // console.log('Is the deposit insured? ' + isInsured);
}

// blockScopeExample(2);
// blockScopeExample(1);

// function calculateTip(preTip, tipPercent) {
//     const tipResult = preTip * tipPercent;
//     return tipResult;
// }

// const preTipTotal = 100.00;
// const tipPercentage = 0.15;
// const tipCost = calculateTip(preTipTotal, tipPercentage);
// const totalBill = preTipTotal + tipCost;
// console.log('Your total bill is $' + totalBill);

// function functionName([arguments]) {
// JavaScript Statements
// }

// function ([arguments]) {
// JavaScript Statements
// }

const preTipTotal = 100.00;
const tipPercentage = 0.15;

// Declare tipCost using anonymous function
// const tipCost = function (preTip, tipPercent) {
//     const tipResult = preTip * tipPercent;
//     return tipResult;
// }
// const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
// console.log("Your total bill is $" + totalBill);

// ([arguments]) => {
// JavaScript statements
// }

// const tipCost = (preTip, tipPercent) => {
// const tipResult = preTip * tipPercent;
// return tipResult;
// return preTip * tipPercent;
// }

// const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
// console.log("Your total bill is $" + totalBill);

const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
    // condition t or f ? firstResult : secondResult;
}
// console.log(roundTo(40, 3));
// n = 40, step = 3;
// remainder = 40 % 3 = 1
// return 40 - 1 + (1 < 3 / 2 ? 0 : 3)

// ([arguments]) =>  JavaScript Statements

const sum = (num1, num2) => num1 + num2;

const square = num => num * num;

const addTwoNumbers = () => 5 + 3;

const vehicle = {
    name: "Fiat",
    model: "500",
    weight: 850,
    color: "white",
    start(speed) {
        console.log("Starting car");
        for (let i = 0; i <= speed; i += 5) {
            console.log('accelerating at ' + i + ' mph');
        }
        console.log('Reached desired speed');
    },
    makeAndModel: function () {
        return this.name + " " + this.model;  // refers to the vehicle object
    },
    weightInKgs: () => {
        console.log(vehicle.weight);
        return vehicle.weight + "kg";
    }
}

// objectName.property
// objectName["property"]
// objectName[expression]


// console.log('My newest car is a ' + vehicle.color + ' ' + vehicle.makeAndModel());
// console.log('My ' + vehicle.name + " weight is " + vehicle.weightInKgs());
// console.log(vehicle.start(55));
const adult = { firstName: "Bob", lastName: "Ross", age: 50, eyeColor: "blue" };

const duck1 = {};
const duck2 = new Object();

duck1.color = "magenta";
// console.log(duck1);

let duckColor = duck1["color"];
// console.log(duckColor);

const person = {
    name: "Bill",
    age: 54,
    2: "Thompson",
    "Joe Cool": "Snoopy"
}

// console.log(person);
person.jeanSize = 42;
// console.log(person);
// console.log(person["name"]);
person["country"] = "USA";
// console.log(person);
person.name = "John";
// console.log(person);
let i = "Joe Cool";
// console.log(person[i]);
person[i] = "Spike";
// console.log(person);
delete person.name;
// console.log(person.name);
// console.log(person);
// console.log("country" in person);
// console.log("name" in person);
// console.log(Object.keys(person));
// console.log(person.2); wrong
// console.log(person[2]);
// person.2 = "Johnson";  wrong
person[2] = "Johnson";
// console.log(person);
// person.'2' = 'Baird'; wrong
person['2'] = 'Baird';
// console.log(person);
person[1 + 1] = "Smith";
// console.log(person);
// person.Joe Cool = "Sonny";  wrong 
// person."Joe Cool" = "Sonny";  wrong 
// person[Joe Cool] = "Sonny";  wrong 
person["Joe Cool"] = "Sonny";
// console.log(person);

const myself = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    },
    myClasses: [
        {
            className: "Science",
            roomNumber: "102",
            teacher: "O'Grady"
        },
        {
            className: "History",
            roomNumber: "303",
            teacher: "Hanon",
            gpa: 3.5
        }
    ]
}

let venue = "QUEST CENTER";
let venueFormatted = venue.toLowerCase();
// console.log(venueFormatted);

let price = 5.8679132;
let priceFormatted = price.toFixed(2);
// console.log(priceFormatted);

const treeFruits = ['Apple', 'Orange', 'Banana'];
// console.log(treeFruits.length);  // 3
treeFruits.push('Kiwi');
// console.log(treeFruits);
// console.log(treeFruits.length);  // 4
treeFruits.pop();
// console.log(treeFruits);
// console.log(treeFruits.length);
treeFruits[3] = 'Dragonfruit';
// console.log(treeFruits);
// console.log(treeFruits.length);
treeFruits[2] = "Peach";
// console.log(treeFruits);
// console.log(treeFruits.length);
const treeFruitsString = treeFruits.toString();
// console.log(treeFruitsString);
treeFruits.sort();
// console.log(treeFruits);
// console.log(treeFruits[treeFruits.length - 1]);
// treeFruits.forEach((item, index) => {
//     console.log('Item #' + (index + 1) + ": " + item);
// });
// let myFruit = treeFruits[2];
// console.log(myFruit);
// let yourFruit = treeFruits.at(2);
// console.log(yourFruit);
// let hisFruit = treeFruits.at(-1);
// console.log(hisFruit);
// console.log(treeFruitsString1 = treeFruits.toString());
// console.log(treeFruitsString1 = treeFruits.join(" * "));
// treeFruits.shift();
// console.log(treeFruits);
// console.log(treeFruits.length);
// treeFruits.unshift("Lemon");
// console.log(treeFruits);
// console.log(treeFruits.length);

const children = ['Joseph', 'Bethany', 'Zachary'];
const adults = ['Amy', 'Andrea', 'Ingrid'];
const parents = ['Errol', 'Francene'];
const myRelatives = children.concat(adults, parents);
console.log(myRelatives);
console.log(children);
console.log(adults);
const myKin = myRelatives.concat('Eric');
console.log(myKin);

const testScores = [[99, 100], [86, 92], [77, 79]];
console.log(testScores);
const newTestScores = testScores.flat();
console.log(newTestScores);

let myFamily = {
    familyName: "Tarvin",
    city: "Omaha",
    state: "NE",
    familyMembers: [
        {
            firstName: "David",
            profession: [
                "Software Engineer",
                "JavaScript Instructor"
            ],
            age: 54,
            familyRole: "Father",
            hobbies: [
                "golf", "coffee", "TV"
            ]
        },
        {
            firstName: "Amy",
            profession: [
                "Housewife"
            ],
            age: 55,
            familyRole: "Mother",
            hobbies: [
                "reading", "crocheting"
            ]
        },
        {
            firstName: "Thomas",
            profession: [
                "Student"
            ],
            grade: "12",
            age: 17,
            familyRole: "Son",
            hobbies: [
                "programming",
                "video games"
            ]
        }
    ]
}

console.log(Object.keys(myFamily));