// Let and const
//*******************************************************************
// Let and Const

/*

//es5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
//console.log(name5);

//es6
const name6 = "Jane Smith";
let age6 = 23;
//name6 = "Jane Miller";
//console.log(name6);


//ES5
function driverLicense5(passedTest){

    if(passedTest){
        var firstName = "Jon";
        var yearOfBirth = 1990;        
    }
    //console.log(firstName, yearOfBirth);
}

driverLicense5(true);

//ES6
function driverLicense6(passedTest){

    if(passedTest){
        let firstName = "Jon";
        const yearOfBirth = 1990;        
    }
   //console.log(firstName, yearOfBirth);
}

driverLicense6(true)

let i = 23;

for(let i =0; i <5; i++){
   console.log(i);    
}

console.log(i);

*/
//*******************************************************************
// Blocks and IIFEs

/*
//ES5
(function () {
    var a = 1;
    var b = 1; 
    
})();

//ES6
{
    const a = 1;
    const b = 1;    
}

*/

//*******************************************************************
// Strings

/*
let firstName = "john";
let lastName = "smith";
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

//ES5
console.log("First name " + firstName + "lastname " + lastName + "age " + calcAge(yearOfBirth));

//ES6
console.log(`First name ${firstName} lastname ${lastName} age ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("j"));
console.log(n.endsWith("th"));
console.log(n.includes(" "));
console.log(`${firstName} `.repeat(5));

*/

//*******************************************************************
// Arrow function

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2019 - el;
});
console.log(`ES5: ${ages5}`);

//ES6
const ages6 = years.map(el => 2019 - el);
console.log(`ES6: ${ages6}`);

const ages6a = years.map( (el,index) => `Age element ${index+1}: ${2019-el};`);
console.log(ages6a);

const ages6b = years.map( (el,index) =>{
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age: ${age};`
});

console.log(ages6b);
*/

//*******************************************************************
// Arrow function and 'this' keyword
/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector(".green").addEventListener('click', function(){
            var str = 'This is box number ' + self.position 
            + " and it is " + self.color;
            alert(str);
        })
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {        
        document.querySelector(".green").addEventListener('click',() => {
            var str = 'This is box numbers ' + this.position 
            + " and it is " + this.color;
            alert(str);
        })
    }
}
box6.clickMe();

//ES6
const box6a = {
    color: 'green',
    position: 1,
    clickMe: () => {        
        document.querySelector(".green").addEventListener('click',() => {
            var str = 'This is box numbers ' + this.position 
            + " and it is " + this.color;
            alert(str);
        })
    }
}
box6a.clickMe();



function Person(name){
    this.name = name;    
}


//ES5
Person.prototype.myFriends5 = function (friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends =['Bob', 'Jane', 'Mark'];
new Person('Jong').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    const arr = friends.map(friend => `${this.name} is friends with ${friend}`);
    console.log(arr);
};
new Person("Kris").myFriends6(friends);
*/


//*******************************************************************
// Destructuring
//ES5
/*
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];
console.log("ES5", name5, age5);

//ES6
const[name6, age6] = ['John', 26];
console.log("ES6", name6, age6);

const obj = {
    firstName: 'Kris',
    lastName: "Taker"
}
const {firstName: a, lastName: b} = obj;
console.log(a,b);

*/

/*
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(`Age: ${age}, Age to retirement: ${retirement}`);
*/

//*******************************************************************
// Arrays

/*
const boxes = document.querySelectorAll('.box');

Node.prototype.setRed = function(){
    this.style.backgroundColor = "firebrick"; 
}

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(box) {
//    box.style.backgroundColor = 'dodgerblue';
})


const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(box => box.style.backgroundColor = "dodgerblue");
*/


//ES5
/*
for(var i=0; i < boxesArr5.length; i++){
    if (boxesArr5[i].className === 'box blue'){
        continue;
    }
    boxesArr5[i].textContent = "I changed to blue";
}
*/

/*
//ES6
for (const box of boxesArr6){
    !box.className.includes("blue") ? box.textContent = "I changed to blue6" : null;
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(age) {
    return age >=18;
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log("---ES6---")
console.log(ages.findIndex(age => age >=18));
console.log(ages.find(age => age >= 18));
*/

//*******************************************************************
// Spread operator

/*
function addFourAges(a, b, c, d){
    return a + b +c +d;
}
console.log( addFourAges (18,30,12,21));

arr6 = [18,30,12,21];
console.log( addFourAges(...arr6));

const family1 = ["a", 'b','v','t'];
const family2 = ['u','f','z'];
const family3 = [...family1,'sdf',...family2,'dsf'];
console.log(family3);


Node.prototype.setRed = function(){
    this.style.backgroundColor = "firebrick"; 
}

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

all.forEach(el => el.setRed());
*/

//*******************************************************************
// Rest parameters

/*

//ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(arg){
        console.log((new Date().getFullYear() - arg) >= 18);
    })
}

//isFullAge5(2000, 2005, 1965);
//console.log("-");
//isFullAge5(2000, 2005, 1965, 2004,2000, 2005, 1965);


//ES6
function isFullAge6(...years){
    //console.log(years);
    years.forEach(year => 
        console.log((new Date().getFullYear() - year) >= 18) );
}

isFullAge6(2000, 2005, 1965);
console.log("-");
isFullAge6(2000, 2005, 1965, 2004,2000, 2005, 1965);
*/

/*

//ES5
function isFullAge5(limit){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function(arg){
        console.log((new Date().getFullYear() - arg) >= limit);
    })
}

//console.log("-");
//isFullAge5(2000, 2005, 1965, 2004,2000, 2005, 1965);


//ES6
function isFullAge6(limit, ...years){    
    years.forEach(year => 
        console.log((new Date().getFullYear() - year) >= limit) );
}

//isFullAge6(2000, 2005, 1965);
//console.log("-");
//isFullAge6(2000, 2005, 1965, 2004,2000, 2005, 1965);
console.log("ES5:")
isFullAge5(12, 2000, 2005, 1965);
console.log("---")
console.log("ES6:")
isFullAge6(20, 2000, 2005, 1965);
*/

//*******************************************************************
// Default parameter

/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){            
    this.firstName = firstName;
    this.lastName = lastName === undefined ? "Smith" : lastName;
    this.nationality = nationality === undefined ? "Russian" : nationality;
    this.yearOfBirth = yearOfBirth;    
}

var john = new SmithPerson("John", 1990);
var john2 = new SmithPerson("John", 1990, "Miller", "Spanish");

//ES6
function SmithPerson6(firstName, yearOfBirth,lastName = "Smith", nationality = "Russian"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.yearOfBirth = yearOfBirth;
}

let kris = new SmithPerson6("Kris", 2000);
let kris2 = new SmithPerson6("Kris", 2000, "Rosk", "French");
*/

//*******************************************************************
// Maps

/*
const question = new Map();
question.set('question', 'What is name?');
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong!');

// console.log(question.get('question'));
// console.log(question.size);
// question.has(4) ? question.delete(4) : null;

// question.forEach((value, key) => console.log(key,value));
// console.log("---")

/*
for (let [key,value] of question.entries()){
    if(Number.isInteger(key)){
        console.log(key, value);
    }
}
*/

/*
console.log(question.get('question'));
question.forEach((value,key) => Number.isInteger(key) ? console.log(key, value) : null);
const usrAns = parseInt(prompt("Write the answr"));
const correctAns = question.get("correct");
console.log(question.get(usrAns === correctAns));
*/

// Небольшой эксперимент с массивами
/*
let rndArr = [];
let checkPoint1 = performance.now();
for (let i = 0; i<1000000; i++){
    let val = Math.round( Math.random()*100000);
    rndArr.push(val);
}
let arrGenerationTime = ((performance.now() - checkPoint1)/1000).toFixed(3);
console.log(`Время генерации массива: ${arrGenerationTime}`);

let checkPoint2 = performance.now();
rndArr.sort((a,b) => a-b);
let arrSortTime = ((performance.now() - checkPoint2)/1000).toFixed(3);
console.log(`Время coртировки массива: ${arrSortTime}`);
*/


//*******************************************************************
// Classes

//ES5
/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5("John", 1990, "teacher");


//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job
    }

    calculateAge(){
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log("hey!")
    }
}

Person6.greeting();

const john6 = new Person6("Kris", 2000, "driver");
*/

//*******************************************************************
// Classes and subclasses

/*
//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals){
    Person5.call(this, name,yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5("John", 1990, 'swimmer', 3,10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job
    }

    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        return "hey!";
    }
}

class Athlete6 extends Person6{

    constructor(name, yearOfBirth, job, olymicGames, medals){
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6("John", 1990, 'swimmer', 3,10)
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

const streetLength = {
    TINY: "крохотная",
    SMALL: "маленькая",
    NORMAL: "средняя",
    BIG: "большая",
    HUGE: "огромная"
}

class TownObject{
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Street extends TownObject{
    constructor(name, buildYear, length = streetLength.NORMAL){
        super(name, buildYear);
        this.length = length;
    }
   
    streetClass(){
        const strLen = this.length;
        let streetClass;
        
        if (this.length > 10){
            streetClass = streetLength.BIG;            
        } else if (this.length > 5){
            streetClass = streetLength.NORMAL;
        } else if (this.length > 2){
            streetClass = streetLength.SMALL;
        } else {
            streetClass = streetLength.TINY;
        }

        return [strLen, streetClass]
    }

}

class Park extends TownObject{
    constructor(name, buildYear, area, treesNumber){
        super(name, buildYear);
        this.area = area;
        this.treesNumber = treesNumber;
    }

    treeDensity(){
        return (this.treesNumber / this.area).toFixed(2);
    }

    age(){
        return new Date().getFullYear() - this.buildYear;
    }
}

class Town{
    constructor(name){
        this.name = name;
        this.streets = [];
        this.parks = [];
    }

    addStreet(name, buildYear, length){
        this.streets.push( new Street(name, buildYear, length));        
    }

    addPark(name, buildYear, area, treesNumber){
        this.parks.push( new Park(name, buildYear, area, treesNumber));
    }

    reportAvgAgeOfPrks(){                
        const parksAges = this.parks.map(park => park.age());
        const avgAge = parksAges.reduce((sum,age) => sum + age ,0) / parksAges.length;                
        console.log(`У нас есть ${this.parks.length} парка со средним возрастом ${avgAge.toFixed(2)} лет.`);        
    }

    reportParkTreeDensity(){
        this.parks.forEach(park => console.log(`${park.name} обладает плотностью ${park.treeDensity()} на квадратный км.`))
    }

    reportParksMoreThen1000Trees(){
        this.parks.forEach( park => park.treesNumber > 1000 ? console.log(`В парке ${park.name} растут больше 1000 деревьев.`) : null)
    }

    reportStreetLength(){
        const strLens = this.streets.map(street => street.length);
        const totalLength = strLens.reduce((sum,len) => sum + len ,0);
        const avgLength = (totalLength / strLens.length).toFixed(2);
        console.log(`Наши ${this.streets.length} улицы имеют протяженность в ${totalLength} км., и среднюю длину в ${avgLength} км. `)
    }

    reportStreetClassification(){
        this.streets.forEach(street => {
            const [strLen, strClass] = street.streetClass();
            console.log(`Улица ${street.name} построена в ${street.buildYear} году, имеет длину в ${strLen} и это ${strClass} улица`)
        })
    }


}

let vladimir = new Town("Vladimir");
vladimir.addStreet("Lenina",1931,10);
vladimir.addStreet("Gorkogo",1941,5);
vladimir.addStreet("Gastello",1977,2);
vladimir.addStreet("Lakina",1920,15);

vladimir.addPark("850", 1965, 10, 2543);
vladimir.addPark("Friendship", 1980, 30, 999);
vladimir.addPark("CountryPark", 1900, 100, 12762);

console.log(`***** Отчет по паркам ****`);
vladimir.reportAvgAgeOfPrks();
vladimir.reportParkTreeDensity();
vladimir.reportParksMoreThen1000Trees();

console.log(`***** Отчет по улицам ****`);
vladimir.reportStreetLength();
vladimir.reportStreetClassification();
