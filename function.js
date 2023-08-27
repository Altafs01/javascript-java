// function checkAge(age){
//     if (age >= 18) {
//         return true;

//     }
//     else {
//         return confirm (`do you have permission from your parent?`);
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
// alert ( `The result of multiplication is `+  multiplictaionResult );
// // alert   ("The result of multiplication is "+ multiplictaionResult);


// let divisionResult = div(firstNumber, secondNumber);
// alert   ("The result of division is "+ divisionResult);


// ------------------------------------------------------------------------
// function showMessage() {
//     let message = "hello, I'm Anas!";
//     alert( message)
// }


// let greeter = "hey hi";
// let hello = "Hi"
// let times = 4;

// if (times >3){
//     let hello = "say Hello instead"
//     console.log(hello);
// }
// console.log(hello);
// --------------------------------------------
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

// ------------------------------------------------

// outer variables-----------------------------

// let username = `Altaf`;
// var username2 = `Patel`;

// function showMessage(){
//     let username1 = `Hello `+ username;
//     alert(username1);
//     // console.log(username2);
// }

// showMessage(); 
// console.log(username) 
// ------------------------------------------------

// let username = `Danish`;

// function showMessage() {
//     username = `Altaf`;   //changed the outer variable
//     let message = `Hello `+ username;
//     // alert(message);
//     console.log(message); 
// }

// alert(username); //Danish before the function call
// showMessage();
// alert(username);  //Altaf the value was modified by the function.
// ------------------------------------------------------------------------

// function abcd(){
//   for (var i=1; i<12; i++){
//     console.log (i);
//   }
//   console.log(i);
// }

// abcd();

// var a = 5;
// let b = 10;
// -------------------------------------------------

// console.log('01-swapping-variables');

// let var1 = 'one';
// let var2 = 'two';

// console.log('Before swap in var1 :', var1);
// console.log('Before swap in var2 :', var2);



// // swapping value

// let tempVar = var1;
// var1 = var2;
// var2 = tempVar;

// console.log('After swap in var1 :', var1);
// console.log('After swap in var2 :', var2);
// ----------------------------------------------------------------

// console.log('02-max-number');

// function findMaxNumber(num1, num2) {
//   // 1. long syntax
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }


//   // 2. short  syntax
//   if (num1 > num2) return num1;
//   else return num2;

//   // 3. ternary short sytax
//   return (num1 > num2) ? num1 : num2;
// }

// function findMaxNumberLong(num1, num2) {
//   // 1. long syntax
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }


// function findMaxNumberShort(num1, num2) {
//   // 2. short  syntax
//   if (num1 > num2) return num1;
//   else return num2;

// }

// function findMaxNumberTernary(num1, num2) {
//   // 3. ternary short sytax
//   return (num1 > num2) ? num1 : num2;
// }



// let checkMax1 = findMaxNumberLong(10, 5);
// console.log('Max Number from Long Syntax :', checkMax1);


// let checkMax2 = findMaxNumberShort(10, 15);
// console.log('Max Number from short Syntax :', checkMax2);

// let checkMax3 = findMaxNumberTernary(100, 100);
// console.log('Max Number from ternary Syntax :', checkMax3);
// ---------------------------------------------------------------------


console.log('3-landscape-portrait');

// function isLandscape(width, height){
//   // 3. ternary short syntax 
//   return (width > height) 

// }

// function isPotrate(width, height){
//   return (width < height)
// }


// let checkWidthHeight1 = isPotrate(800, 600);
// console.log('Landscape: ', checkWidthHeight1);

// let checkWidthHeight2 = isPotrate(600, 800);
// console.log('Landscape: ', checkWidthHeight2);

// let checkWidthHeight3 = isPotrate(1024, 768);
// console.log('Landscape: ', checkWidthHeight3);




function isLandscapeorPotrate(width, height){
     if (width > height) {
        return 'Landscape' ;
      } else {
        return "Potrate";
      }
    }


// let checkWidthHeight1 = isLandscapeorPotrate(800, 600);
// console.log('Landscape: ', checkWidthHeight1);

let checkWidthHeight2 = isLandscapeorPotrate(600, 800);
console.log('Landscape: ', checkWidthHeight2);

// let checkWidthHeight3 = isLandscapeorPotrate(1024, 768);
// console.log('Landscape: ', checkWidthHeight3);







