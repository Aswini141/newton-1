// This functions changes color of the button and enters some text there too
// innerText
// document.write
// window.alert
// console.log
// function clickMe() {
//   document.write("My first JS program");
//   document.getElementsByClassName("gridChild2")[0].innerText =
//     "Loading from external file";
//   window.alert("Alert message");
//   console.log("Click me function called");
//   window.print();
//   let a = 5;
//   let b = 6;
//   let c = a + b;
//   console.log(c);
// }

function doSomething(){
    let a;    
    a = 5;
    
    var c;
    c = 7;
    // Equal sign '=' is called assignment operator

    // Arithematic operators
    let product  = c*a;    
    let sum  = c+a;    
    let difference  = c-a;    
    let multiplier  = c/a;    

    let b = 1;
    b = b+1;
    // console.log(product, sum, difference, multiplier)

    // Expressions    
    let expressionVal = 5*b+sum-product;
    console.log(expressionVal)

    let firstName = 'Parikshit';
    let secondName = 'nkasn';

    // String concatenation
    let resultString = firstName + "-" + secondName;
    console.log(resultString)
}

function variables(){
    // var name; // declaring
    // name = 'Gaurav' // Assigning
    var name  = "Gaurav";
    console.log(name) //     
    var firstName = "FirstName", 
    secondName="SecondName",
    _class = 10;
    console.log(firstName, secondName, _class);
    var mySpecialVar;
    var mySpecialVar = "special";    
    console.log(mySpecialVar)
}
/* Let keyword
    1. Cannot be re declared

    Invalid
    let a = 5;
    let a = 6;

    Valid
    var b = 5;
    var b =6;

    2. Blocked scope

    {
        let x = 2;
    }
    let x = 3;
    {
        let x  = 5;
    }

    For var
    {
        var x = 2;
    }
    x=5;

    3. Cannot be hoisted
     
    function abc(){
        carName = 'abc';
        let x = 5*3;
        let y = 5*7;
        let z = 5*10;
        var carName;
    }
*/

/*
    const Keyword
    1. Blocked scope

    {
        const x = 2;
    }        
    const x = 3;
    {
        const x  = 5;
    }
    2. Must be initialised at the time of declration
        
    Valid:
        const abc = 10;
    Invalid:
        const abc;
        abc = 30  
    Valid:
        let def;
        def = 40;  
*/

/*
    Operators
    1. Arithematic operators
        -> +,-,/,*,
        -> **, %, ++, --
        2**3 = 8(power of operator)
        16%5 = 1 (Modulus operator)
        let x = 5;
        x++; X becomes 6 | Equivalent of saying x = x+1
        x--; X becomes 5 again | Equivalent of saying x = x-1
    2. Assignment operators
        -> = 
        -> += |  x = x+1, x+=1
        -> -= |  x = x-1, x-=1 
        -> /= |  x = x/1, x/=1 
        -> *=
        -> %=
        -> **= |  x = x**2, x**=2 
    3. Comparison operators
        ->  == equal to operator
        ->  === exact equality operator
        -> != not equal to operator 
        -> !==  exact not equal to operator 
        -> > greater than 
        -> < less than 
        -> >= greater than equal to
        -> <= less than equal to
    4. Logical operators
        -> && AND operator
        -> || OR operator
        -> ! operator        
*/

/* 
Printing the table of 2
 console.log(2*1)
 console.log(2*2)
 console.log(2*3)
 console.log(2*4)

 // for loop
 for(let i=0;i<10;i++){
     console.log("Hi");
 }


*/

let numberOfSingleClicks = 0;

function clickMe(){
    numberOfSingleClicks++;        
    if(numberOfSingleClicks%2 == 0){    
        document.getElementById('item1').style.fontWeight = 'bolder';
    }
    else{
        document.getElementById('item1').style.fontWeight = '400';
    }

    if(numberOfSingleClicks <= 2){  
        document.getElementById('item1').style.color = "green"
    }    
    else if(numberOfSingleClicks>2 && numberOfSingleClicks <= 6 ){        
        document.getElementById('item1').style.color = "blue"
    }
    else if(numberOfSingleClicks >6 && numberOfSingleClicks <= 10){        
        document.getElementById('item1').style.color = "orange"
    }
    else if(numberOfSingleClicks > 10){        
        document.getElementById('item1').style.color = "red"
    }
    else{
        console.log("This happened");
    }

    document.getElementById('item1').innerText = "No. of times clicked:" + numberOfSingleClicks;
}