// function checkAge(age){
//     if (age >= 18) {
//         return true;

//     }
//     else {
//         return confirm (`do you have permission from your parent`);
//     }
// }

// let age = prompt(`how old are you?`,);

// if(checkAge(age)){
//     alert(`access granted`);
// }
// else{
//         alert(`access denied`);
//     }



// function sum(a,b) {
//     return a + b;
// }

// function sub(x,y) {
//     return x - y;
// }
// function mul(c,d) {
//     return c * d;
// }
// function div(c,d) {
//     return c / d;
// }


// let firstNumber = prompt (`enter your first no.`);
// let secondNumber = prompt (`enter your second no.`);
// console.log(typeof(firstNumber));
// console.log(typeof(secondNumber));
// firstNumber= Number (firstNumber);
// secondNumber= Number(secondNumber);


// let additionResult = sum(firstNumber, secondNumber);

// alert ("The result of addition is "+ additionResult );



// let substractionResult = sub(firstNumber, secondNumber);

// alert ( "The result of substraction is "+ substractionResult);


// let multiplictaionResult = mul(firstNumber, secondNumber);
// alert ( `The result of multiplication is `+  multiplictaionResult )
// // alert   ("The result of multiplication is "+ multiplictaionResult);


// let divisionResult = div(firstNumber, secondNumber);
// alert   ("The result of division is "+ divisionResult);

// function showMessage() {
//     let message = "hello, I'm Anas!";
//     alert( message)
// }

// let hello = "Hi";
// console.log(hello)

// let greeter = "hey hi";
// let hello = "Hi"
// let times = 4;

// if (times >3){
//     let hello = "say Hello instead"
//     console.log(hello);
// }
// console.log(hello);

// var greeter = "hey hi";
// var times = 4;

// if(times >3){
//     var greeter = "say Hello";
// }

// function showMessage() {
//     var greeter = "say Hello instead";
//     console.log(greeter);
// }

// console.log(greeter);
// showMessage();
// console.log(greeter);

  // outer variables-----------------------------

// let username = `Altaf`;

// function showMessage(){
//     let username1 = `Hello `+ username;
//     alert(username1);
// }

// showMessage();  
// ------------------------------------------------

let username = `Danish`;

function showMessage(){
    username = `Altaf`;   //changed the outer variable
    let message = `Hello `+ username;
    alert(message);
    // console.log(message); 
}

alert(username); //Danish before the function call
showMessage();
alert(username);  //Altaf the value was modified by the function.


