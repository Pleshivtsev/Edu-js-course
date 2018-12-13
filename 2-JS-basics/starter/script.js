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
* /*

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
*/

/**************************************************
* Ternary 
* /*


const whatISee = 'leaf';

const timeOfYear = whatISee === 'snow'? 'winter' : 'not winter';
console.log(timeOfYear);
*/


/**************************************************
* Chalenge 2
* /*

const jonhGameScore1 = 105;
const jonhGameScore2 = 105;
const jonhGameScore3 = 105;
const jonhGameAverage = (jonhGameScore1+jonhGameScore2+jonhGameScore3)/3;

const mikeGameScore1 = 105;
const mikeGameScore2 = 105;
const mikeGameScore3 = 105;
const mikeGameAverage = (mikeGameScore1+mikeGameScore2+mikeGameScore3)/3;

const maryGameScore1 = 105;
const maryGameScore2 = 105;
const maryGameScore3 = 106;
const maryGameAverage = (maryGameScore1+maryGameScore2+maryGameScore3)/3;

let maxGameAverage = jonhGameAverage;

if (mikeGameAverage > maxGameAverage) maxGameAverage = mikeGameAverage;
if (maryGameAverage > maxGameAverage) maxGameAverage = maryGameAverage;

console.log("****** Our winners! ********");

if (jonhGameAverage === maxGameAverage) console.log("John!!!");
if (mikeGameAverage === maxGameAverage) console.log("Mike!!!");
if (maryGameAverage === maxGameAverage) console.log("Mary!!!");
*/

/**************************************************
* Arrays 
* /*

var basicArray = [1,1,2,3];
var indexes = [];
var i;

for(i=0; i<basicArray.length; i++){
    if (basicArray[i] === 1) {
        indexes.push(i);
        basicArray[i] = ":)";
    }
}


/**************************************************
* Chalenge 3
*/

var bills = [124,48, 268];

function calculateTip(bill){
    switch(true){
        case bill < 50  : return bill *.20;
        case bill < 200 : return bill *.15;
        default         : return bill *.10;
    }
}

function getTips(billsAr){
    let tips = [], i;
    for (i = 0; i< billsAr.length; i++){        
        switch(true){
            case billsAr[i] < 50 : tips.push(billsAr[i] * 0.2); break;
            case billsAr[i]  <200: tips.push(tip = billsAr[i] * 0.15); break;
            default: tips.push(billsAr[i] * 0.1);
        }        
    }
    return tips;    
}

function getTotalBils(billsAr, tipsAr){
    let totalBills = [], i;
    for(i = 0; i<billsAr.length; i++) totalBills.push(billsAr[i] + tipsAr[i]);
    return totalBills;      
}

function getTips2(billsAr){
    let tips = [];
    billsAr.forEach(bill => tips.push(calculateTip(bill)));
    return tips;
}


console.log(bills);
console.log(getTips(bills));
console.log(getTotalBils(bills,getTips(bills)));
console.log("****************************");
console.log(getTips2(bills));

