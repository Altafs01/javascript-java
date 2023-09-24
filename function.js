// check age-----------------------------------------------------------------------------------------1
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


// ---------------------------------------------------------------------------------------------------2

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


// ------------------------------------------------------------------------3
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
// --------------------------------------------4
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

// outer variables-----------------------------5

// let username = `Altaf`;
// var username2 = `Patel`;

// function showMessage(){
//     let username1 = `Hello `+ username;
//     alert(username1);
//     // console.log(username2);
// }

// showMessage(); 
// console.log(username) 
// ------------------------------------------------6

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
// ------------------------------------------------------------------------7

// function abcd(){
//   for (var i=1; i<12; i++){
//     console.log (i);
//   }
//   console.log(i);
// }

// abcd();

// var a = 5;
// let b = 10;
// -------------------------------------------------8

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
// ----------------------------------------------------------------9

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


// ---------------------------------------------------------------------10
// console.log('3-landscape-portrait');

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




// function isLandscapeorPotrate(width, height){
//      if (width > height) {
//         return 'Landscape' ;
//       } else {
//         return "Potrate";
//       }
//     }


// let checkWidthHeight1 = isLandscapeorPotrate(800, 600);
// console.log('Landscape: ', checkWidthHeight1);

// let checkWidthHeight2 = isLandscapeorPotrate(600, 800);
// console.log('Landscape: ', checkWidthHeight2);

// let checkWidthHeight3 = isLandscapeorPotrate(1024, 768);
// console.log('Landscape: ', checkWidthHeight3);
// ---------------------------------------------------------------


// isfizzBuzz----------------------------------------------11
// function isfizzBuzz(arg) {
//     if (typeof (arg) !== 'number') {
//         return ('Nan Not a number Please enter number');

//     }

//     if ((arg % 3 === 0) && (arg % 5 === 0)){

//         return ('fizzBuzz');
//     }

//     if(arg % 3 ===0){
//         return('fizz')
//     }

//     if(arg % 5 ===0 ){
//         return('Buzz');
//     }

//     else{
//         return ('Given Input Number/value')
//     }

// }



// let check1 = isfizzBuzz (2)
// console.log(check1);

// let check2 = isfizzBuzz (9)
// console.log(check2);

// let check3 = isfizzBuzz (10)
// console.log(check3);

// let check = isfizzBuzz ('one')
// console.log(check1);
// ----------------------------------------------------------------------


// function isspeedlimit ------------------------------------------------------------------------------12

// function isspeedlimit (arg){
//     if (arg < 70){
//         return ('Good Safe Driving');

//     }

//     if (arg > 70)  {
//         let pp = 0;
//         pp= (arg -70)/5;
//         // console.log(pp)

//         if (pp >=10 ){
//             return ('license Suspende');
//         }

//         else{
//             return('speed Limit crossed Penalty Point ' + pp);
//         }
//     }

// }

// let check = isspeedlimit(90)
// console.log(check);

// let check1 = isspeedlimit(150)
// console.log(check1);

// let check2 = isspeedlimit(50)
// console.log(check2);
// -----------------------------------------------------

// for loop ------------------------------------------------------------------------------------------------------------13

// declaration of for loop or syntax of for loop--------------------------
// for(initialization; check/test expression; increment decrement/update;){
// body consisting of multiple statements
// }


// function isOddEvenNumber(curLimit){

//     for(i=0; i<=10 ; i++ ){
//         if ((i % 2 )==0){
//             console.log(i , 'EVEN')
//         }
//         else{
//             console.log(i, 'ODD')
//         }
//     }
// }

// let check = isOddEvenNumber(10)
// console.log(check);
// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------14
// const valueArray = [0 ,1, '', undefined,false,true ]

// let truthyCount = 0;
// let falsyCount = 0;

// function checkCountTruthyFalsy(curArray){

//     for (let value of curArray){

//         if (value){
//             truthyCount++;
//         }else{
//             falsyCount++;
//         }
//     }
// }

// checkCountTruthyFalsy(valueArray)
// console.log(truthyCount);
// console.log(falsyCount);
// ------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------15
// function ShowStringProperties(curObj){
//     for(let key in curObj){

//         if(typeof(curObj[key])=== 'string'){

//             console.log(key, ':', curObj[key]);

//         }
//     }
// }

// const Person = {
//     name: 'Altaf',
//     age : 22,
//     height : 6.1,
//     country : 'india',
//     designation : 'Developer'
// }

// ShowStringProperties(Person);
// ---------------------------------------------------------------------

// function sumOfMultipleValue(curLimit){

//     let sumOfMultipleValue = 0;

//     for( let i= 1; i <= curLimit; i++){
//         if(i % 3 ===0 || i % 5 ===0){
//             // console.log(i);
//             sumOfMultipleValue +=i;
//         }
//     }
//     console.log(`sumOfMultipleValue of 3 & 5 upto ${curLimit} digit is:`, sumOfMultipleValue)
// }

// sumOfMultipleValue(10);
// ----------------------------------------------------------------------------------

// function star(row) {
//     for (i = 1; i <= row; i++) {
//         let pattern = '';

//         for (j = 0; j < i; i++) {

//             pattern += '*';

//         }

//         console.log(pattern);
//     }
// }
// star(4);
// --------------------------------------------------------------------------

// var para = document.querySelector ('#para');
// para.style.fontSize = `40px`;
// para.style.color = `green`;
// para.style.backgroundColor = `black`;
// ----------------------------------------------------------------

// user = {
//     fName : "Altaf",
//     lName : "Shaikh",
//     role : "Admin",
//     liginCount : 32,
//     courseList : [],
//     buyCourse: function(courseName){
//         this.courseList.push(courseName);
//     },
//     getCourseCount: function (){
//         return ` ${lName} has enrolled for ${this.courseList.length} courses`;
//     }
// }

// console.log(user.fName);
// console.log(user.lName);
// console.log(user.role);
// console.log(user.liginCount);
// console.log(user.courseList);
// console.log(user.lName);
// user.buyCourse("c++");
// user.buyCourse("java");
// user.buyCourse("React Js");
// console.log(user.getCourseCount());
// ------------------------------------------------------------------

// context tutorial

// var contextObj = {
//     invokeThisobj() {
//         return this;
//     },
// };

// console.log("2nd position of", contextObj.invokeThisobj);

// class contextObj2 {
//     constructor(a) {
//         this.a = a;
//     }


//     func1() {
//         return this;
//     }
// }

// var inst = new contextObj2(2);
// console.log(inst.func1());
// var inst2 = new contextObj2(5);
// console.log(inst2.func1());
// ------------------------------------------------------------------------------------------------------

// var arr = ["India", "Japan", "USA", "Austrilia"];
var arr2 = new Array("Mumbai", "Pune", "Banglore", "Aurangabad");

// console.log(arr);
// console.log("Array Length :", arr.length);
// console.log(arr2[0]);

// // push and pop in array

arr2.pop();
console.log(arr2);
arr2.push();
arr2.push("Jaipur");
console.log(arr2);


// unshift and shift in array 

// console.time();
// arr2.unshift("Indore");
// console.log("After unshift:", arr2);
// arr2.shift();
// console.timeEnd();

// // Array.form

// console.log(Array.from("fauzan falke"));
// console.log(Array.from([2, 3, 4], (x => x * x)));

// var arr3 = "javaScript";
// console.log(Array.from(arr3, (x => x + 5)));

// ----------------------------------------------------------------------------------------------------------

// var isEven = (no) => {
//     return no % 2 ===0;
// };
// console.log(isEven(4) );

// Array.every example

// var array = [2, 4, 6, 10]
// var result = array.every(isEven);   
// console.log("Result " + result);

// var array1 = [5, 11, 20, 100];
// console.log(array1.every((x) => x % 5 === 0));
// -------------------------------------------------------------------------------------------------------------------------
