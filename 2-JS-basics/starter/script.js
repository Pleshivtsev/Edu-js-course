/**************************************************
* Variables and data types
*


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable nameing rules
var _3years = 3;
var johnMarrk = 'John and Mark';
*/ 

/**************************************************
* Variables mitation and type coercion
* /*

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

alert('Is John married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(lastName);
*/

/**************************************************
* Chalenge 1
*/

var markMass, johnMass;
var markHeight, johnHeight;
var markBMI, johnBMI;
var markBMIisGreaterThanJohnBMI;


const i = '30'

const obj = '{"name": "Semyon"}';

const tbl = ['a', 'b', 'c', 'd']

markMass = 100;
johnMass = 70;

markHeight = 1.70;
johnHeight = 1.80;

markBMI = markMass/markHeight**2;
johnBMI = johnMass/johnHeight**2;

markBMIisGreaterThanJohnBMI = markBMI > johnBMI;

console.log("Mark mass is: ", markMass, " and height is: ", markHeight);
console.log("John mass is: ", johnMass, " and height is: ", johnHeight);
console.log("-------------------");
console.log("Mark BMI is ", markBMI, " and John BMI is ", johnBMI);
console.log("-------------------");
console.log("Is Mark BMI greater than JohnBMI? ", markBMIisGreaterThanJohnBMI);

obj.firstName = "Ivan"


if (i ===  30) {
    console.log('true1')
}

if (i ==  30) {
    console.log('true2')
}


console.log(`some string ${JSON.stringify( i )}`);
console.log(`some string ${JSON.parse( obj )}`);
console.log(obj);
console.log(JSON.parse( obj ));
console.log(tbl)
console.table(tbl)
