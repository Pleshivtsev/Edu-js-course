///////////////////////////////////////
// Lecture: Hoisting




//let age
/*
var age = 23;

var test1 = function(message){
    var age = 24;
    console.log(message, age);    
}

function test2() {
    var age;
    console.log(age);
    //var age = 25;    
}

test1("hello");
test2();
console.log(age);

*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

/*
var John = {
    name: "Jonh",
    age: 110,
    sout: function(){
        console.log(this);

        function inner(){
            console.log(this); 
            var bill = {
                name: "bill",
                age: 120,
                sout: function(){
                    console.log(this);
                }
            }
            bill.sout();       
        }

        inner();

    }

}

John.sout();
*/

var i = true + 1;
console.log(i);





