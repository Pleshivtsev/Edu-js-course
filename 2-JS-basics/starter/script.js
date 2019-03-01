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
* /*

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

function calcTotalBill(bill){
    return bill +=calculateTip(bill);
}

function getTips2(billsAr){
    let tips = [];
    billsAr.forEach(bill => tips.push(calculateTip(bill)));
    return tips;
}

function getTotalBils2(billsAr){
    let totalBills = [];
    billsAr.forEach(bill => totalBills.push(calcTotalBill(bill)) );
    return totalBills;
}

function billsParser(bill, index, billsAr){
    console.log("bill: ", billsAr[index], 
                "tip: ", calculateTip(billsAr[index]),
                "total:", calcTotalBill(billsAr[index]));
}

function parseBills(billsAr){
    billsAr.forEach(billsParser);
}


console.log(bills);
console.log(getTips(bills));
console.log(getTotalBils(bills,getTips(bills)));
console.log("****************************");
console.log(getTips2(bills));
console.log(getTotalBils2(bills));
parseBills(bills);
*/

/**************************************************
* Chalenge 4
*/
var bmi = 100;

const john = {
    height: 1.80,
    mass: 70,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

var mark = {
    height: 1.80,
    mass: 60,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}


const btn =  document.getElementById('calcTips').addEventListener('click', function ()  {
    console.log(`BMI are ${john.calcBMI()}`)
})
    
switch(true){
    case john.bmi === mark.bmi: console.log("John and Mark has equal BMI"); break;    
    case john.bmi < mark.bmi: console.log("Jonn BMI is better"); break;
    default : console.log("Mark BMI is better");  
}

function calculateTip(bill){
    if (bill < 50) return bill *.20;
    if (bill <200) return bill *.15;
    return bill *.10;

    // switch(true){
    //     case bill < 50  : return bill *.20;
    //     case bill < 200 : return bill *.15;
    //     default         : return bill *.10;
    // }
}

//console.log(`tips are: ${calculateTip(130)}`);

/*
fizzbuzz — вывести в столбик числа от 1 до 30, 
если число делится на 3 — то вместо него fizz, 
если делится на 5 — то buzz, если и на 3, и на 5 — то fizzbuz
*/

// Попытка 1
/*
for (let j=1; j<=30; j++){        
    let rest3 = j/3 - Math.floor(j/3);
    let rest5 = j/5 - Math.floor(j/5);
    let postfix = "";

    if (rest3 === 0) postfix += "fizz";
    if (rest5 === 0) postfix += "buzz"

    if(postfix !== "") {
        console.log(j, postfix);
    } else console.log(j);
    
}
*/

//Попытка 2
/*
(function buzz(j){
    var str = j.toString() + " ";
    
    if (j/3 === Math.floor(j/3)) str += "fizz";
    if (j/5 === Math.floor(j/5)) str += "buzz";
    
    console.log(str);
    
    if (j < 30) buzz(j+1);
        
})(1);
*/


// Попытка 3
/*
for (let j = 1; j<=30; j++){
    let str = j.toString() + " ";

    j%3 === 0 ? str +="fizz": str += "";
    j%5 === 0 ? str +="buzz": str += "";

    console.log(str);
}
*/

// Попытка 4, тоже самое через foreach;
/*
const arr4 = [...Array(30).keys()]; // Инициализация массива
const iterator = function(item, idx, arr){
    let str = (idx+1).toString() + " ";

    (idx+1)%3 === 0 ? str +="fizz": str += "";
    (idx+1)%5 === 0 ? str +="buzz": str += "";

    console.log(str);
}

//arr4.forEach(iterator);
arr4.forEach(el => {
    let str = (el+1).toString() + " ";

    (el+1)%3 === 0 ? str +="fizz": str += "";
    (el+1)%5 === 0 ? str +="buzz": str += "";

    console.log(str);
});

*/
// Попытка 5, тоже самое через reduce;
const arr5 = [...Array(30).keys()]; // Инициализация массива
const reducer = function(resultString, el){    
    let str = (el+1).toString() + " ";
    (el+1)%3 === 0 ? str +="fizz": str += "";
    (el+1)%5 === 0 ? str +="buzz": str += "";
    return resultString + str + "\r\n";    
}

//console.log(arr5.reduce(reducer,""));
const toPrint = arr5.reduce((resultString, el) => {
    let str = (el+1).toString() + " ";
    (el+1)%3 === 0 ? str +="fizz": str += "";
    (el+1)%5 === 0 ? str +="buzz": str += "";
    return resultString + str + "\r\n";  
},"");
//console.log(toPrint);

//Попытка 6. тоже самое через reduce, но в 1 строчку. Чисто ради развлечения.
//console.log( [...Array(30).keys() ].reduce((res,el) => res + (el + 1) + " " + ((el + 1) % 3 === 0 ? "fizz" : "") + ((el + 1) % 5 === 0 ? "buzz" : "") + "\r\n",""));
//console.log([...Array(30).keys()].reduce((res,el)=> res+(el+1)+" "+((el+1)%3===0?"fizz":"")+((el+1)%5===0?"buzz":"")+"\r\n",""));

const toPrint2 = arr5.reduce((res,el) => {    
    res += (el+1) + " ";
    (el+1)%3 === 0 ? res +="fizz": "";
    (el+1)%5 === 0 ? res +="buzz": "";
    return res + "\r\n";
},"");

const arr5mod = [...Array(30).keys()].map(el => el+1);

const fizzBuzz = [...Array(30).keys()].map(el => el+1).reduce((res,el) => {
    res += el + " ";
    el%3 === 0 ? res +="fizz": "";
    el%5 === 0 ? res +="buzz": "";
    return res + "\r\n";
},"");
