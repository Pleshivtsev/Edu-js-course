/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person.base = "base";

Person.prototype.calculateAge = function(){
    console.log(2016- this.yearOfBirth);
}

Person.prototype.lastName = "S";

var jhon = new Person("john", 1990, "teacher");
console.log(jhon);
jhon.calculateAge();
console.log(jhon.lastName);
*/


//Object.create

/*
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
}


var jhon = Object.create(personProto);
jhon.name = "John";
jhon.yearOfBirth = 1990;
jhon.job = "teacher";

var jane = Object.create(personProto,
    {
        name: { value: "Janhe"},
        yearOfBirth: {value: 1996},
        job: {value: "designer"}
    })

*/

//*********************************************************
//Primitives and objects
/*
var a = 23
var b = a;
a = 46;
console.log(a,b);

var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
console.log(obj1, obj2)
obj1.age = 30;

console.log(obj1, obj2)

//functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a,b){
    a = 30;
    b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


//*********************************************************
// Callback functions
/*
var years = [1990, 1965, 1937, 2005, 1980];

function arrayCalc(arr, fn){
    var arrRes = [];
     for(var i = 0; i < arr.length; i++ ){
         arrRes.push(fn(arr[i]));
     }
     

     return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 *el));
    }
    return -1;   
}

var ages  = arrayCalc(years, calculateAge);
console.log("Ages: ", ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

//ages.forEach(age => console.log(isFullAge(age)));

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

//*********************************************************
// Function returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

function universalClick(isWait){
    if (isWait){
        return function(el, waitTime){
            console.log("Wait for " + waitTime + " and click to element " + el);
        }
    } else {
        return function(el){
            console.log("Just click on element " + el);
        }
    }
}


var waitingElement = universalClick(true);
var simpleElement = universalClick(false);

waitingElement("Contex menu", "10sec");
simpleElement("cryak");

universalClick(true)("Blue button", "12sec");
*/

//*********************************************************
// Immediately Invoked Function Expressions (IIFE)

/*
function game() {
    var score1 = Math.random() * 10;
    console.log(score1 >= 5);
}
game();


(function () {
    var score2 = Math.random() * 10;
    console.log(score2 >= 5);
})();

// console.log("score 1: ",score1);
// console.log("score 2: ",score2);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

//*********************************************************
// Closures - Замыкания


/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);


function interviewQuestionOld(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

function interviewQuestionNewOne(job){
    const designerText = ", can you please explain what UX design is?";
    const teacherTExt = "What subject do you teach, ";
    const defaultPrefix = "Hello ";
    const defaultPostfix = ", what do you do?";

    return function(name){
        switch(job){
            case "designer" : console.log(name + designerText); break;
            case "teacher"  : console.log(teacherTExt + name); break;
            default         : console.log(defaultPrefix + name + defaultPostfix);
        }
    }
}


function interviewQuestionNewOne2(job){
    const designerText = ", can you please explain what UX design is?";
    const teacherTExt = "What subject do you teach, ";
    const defaultPrefix = "Hello ";
    const defaultPostfix = ", what do you do?";

    function logPostFix(text, posFix){
        console.log(text + posFix);
    }

    function logPreFix(preFix, text){
        console.log(preFix + text);
    }

    function logPreAndPostFix(preFix, text, postFix){
        console.log(preFix + text + postFix)
    }

    return function(name){
        switch(job){
            case "designer" : logPostFix(name, designerText); break;
            case "teacher"  : logPreFix(teacherTExt, name); break;
            default         : logPreAndPostFix(defaultPrefix, name, defaultPostfix);
        }
    }
}



function testClosuresChangeVars(param1){
    var var1 = "extFuncVar";
    console.log(param1, var1);

    
    function changeVar(){
        var1 += " - changed";
        param1 += " - changed";        
    }
    
    return function changeVars(param2){
        var var2 = "intFuncVar";
        console.log(param1, param2, var1, var2);
        
        changeVar();
        
        var2 += " - changed";        
        param2 += " - changed";

        console.log(param1, param2, var1, var2);
    }

}

interviewQuestionOld('driver')('Mark');
interviewQuestion('teacher')('John');
interviewQuestionNewOne("designer")("Bill");
interviewQuestionNewOne2("teacher")("Bill2");

testClosuresChangeVars("One")("Two");

*/

//*********************************************************
//Bind, call and apply

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
emily.presentation = john.presentation;
emily.presentation('friendly', 'dine');

console.log("*** --------------------")


john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');


johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

console.log("*** --------------------")

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

console.log("*** --------------------")
//var fullJapan2 = arrayCalc(ages, isFullAge(this, 20)); // Does not work

*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


function quizGame(){
    
    var Question = function(qText, qAnswers, qCorrectAnswer){
        this.qText = qText;
        this.qAnswers = qAnswers;
        this.qCorrectAnswer = qCorrectAnswer;
    }
    
    Question.prototype.display = function(){
        console.log(this.qText);
        for(let i = 0; i < this.qAnswers.length; i++){
            console.log(i +". " + this.qAnswers[i]);
        }
    }

    Question.prototype.getCorrectAnswer = function(){
        return this.qAnswers[this.qCorrectAnswer];
    }
   
    var questions = [];
    var score = 0;

    function addQuestion(qText, qAnswers, qCorrectAnswer){
        var newQuestion = new Question(qText, qAnswers, qCorrectAnswer);
        questions.push(newQuestion);
    }

    function initQuestons(){
        addQuestion(
            "Who can manipulate metall?",
            ["Magneto","QuickSilver","Rogue"],
            0
        );

        addQuestion(
            "Who is fastest mutant?",
            ["Wolverine","QuickSilver","Charles Xavier","Gambit"],
            1
        );

        addQuestion(
            "Who is most powerful psychics in the Marvel Universe?",
            ["Phoenix", "Magneto", "Charles Xavier", "Wolverine", "Gambit"],
            2
        );
    }
        
    function getAnswer(){
        return prompt("Input your answer");    
    }    

    function checkAnswer(userAnswer, question){
        if (userAnswer === "Exit") {
            console.log("************  EndGame ***************")
            return;
        }

        if (parseInt(userAnswer) === question.qCorrectAnswer){            
            console.log("Correct, this is: " +  question.getCorrectAnswer());
            score += 1;
        }else{
            console.log("Wrong! This is: " + question.getCorrectAnswer())
        }        
    }

    function displayScore(){
        console.log("Score is: " + score);
    }

    function askUser(){        
        var num = Math.floor( Math.random()*questions.length);
        questions[num].display();
        var userAnswer =  getAnswer();       
        checkAnswer(userAnswer,questions[num]);
        return userAnswer;
    }

    function game(){
        var answer = askUser()
        if (answer !== "Exit"){            
            displayScore();
            console.log("");
            console.log("*** Next question:")
            game();
        }         
    }

              
    initQuestons();
    game();

}

quizGame();

