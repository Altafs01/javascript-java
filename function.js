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
// ----------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------
    // function isOddEvenNumber(num){
    //     if (num % 2 ===0){
    //         console.log (`${num}  is even number`) 
    //     }
    //     else {
    //         console.log (`${num}  is odd number`) 

    //     }
    
    // }

    // // console.log( typeof(num));
        

    // isOddEvenNumber(12);
    // isOddEvenNumber(13);

// ------------------------------------------------------------------------------


// function isValidNum(num){
//     if(isNaN(num))
//         console.log(`${num} variable is not a number`)

//     else{
//         console.log(`${num} Variable is a valid number`)
//     }
// }

// // isValidNum('one');
// // isValidNum(1);
// isValidNum('45');
// console.log(typeof('45'));
// // isValidNum('char');
// // isValidNum(45.5);
// ------------------------------------------------------------------------------------------------

// function findLargest(num1,num2){
//     if(num1>num2){
//         console.log (`${num1} is largest num1`)
//     }
//     else if (num1<num2){
//         console.log (`${num2}  is largest num2`)

//     }
//     else{
//         console.log(`${num1} is equal to ${num2}`)
//     }
// }

// findLargest(10,20);
// findLargest(20,20);
// findLargest(35,20);
// ------------------------------------------------------------------------------------------------------

// function findLargest(num1, num2, num3){
//     if(num1>num2 && num2>num3){
//         console.log(`${num1} is greater largest than ${num2} ${num3}`)
//     }
//     else if(num2>num3){
//         console.log(`${num2} is largest than ${num3}`)
//     }
//     else{
//         console.log(`${num3} is largest number`)
//     }
// }



// findLargest(35,10,2);
// findLargest(10, 35,25);
// findLargest(10,12,35);

// -------------------------------------------------------------------------------------------------

// function isTrigleEquilateralIsoscelesScalene(side1,side2,side3){
//     if((side1==side2) && (side1==side3)){
//         console.log(`Equilateral Trigle`);
//     }

//     else if(side1==side2 || side2==side3 || side1==side3){
//         console.log(`isosceles Trigle`);
//     }

//     else{
//         console.log(`Scalene Trigle`);
//     }
// }

// isTrigleEquilateralIsoscelesScalene(10,10,10);
// isTrigleEquilateralIsoscelesScalene(3,3,5);
// isTrigleEquilateralIsoscelesScalene(20,21,22);
// --------------------------------------------------------------------------------------------

// function checkLearYear(year){
//     if(((year % 4===0)&&(year % 100 !=0)) || (year % 400 ===0)){
//         console.log (` ${year} leap year`);
//     }
//     else{
//         console.log(` ${year} not a lear year`)
//     }
// }

// checkLearYear(2012);
// checkLearYear(2013);
// checkLearYear(2014);
// checkLearYear(2015);
// checkLearYear(2016);
// ----------------------------------------------------------------------------------------------

// function findGrand(name,marks){

//     if (marks >= 90 && marks <= 100)
//         console.log(`${name} you have received S Grade`)
    
//     else if(marks >= 80 && marks < 90){
//         console.log(`${name} you have received A Grade`)
//     }
//     else if(marks >=70  && marks < 80 ){
//         console.log(`${name} you have received B Grade`)
//     }
//      else if(marks >=60  && marks < 70){
//         console.log(`${name} you have received C Grade`)
//     } 
//     else if(marks >= 50 && marks < 60){
//         console.log(`${name} you have received D Grade`)
//     }

//     else if(marks >=40  && marks < 50){
//         console.log(`${name} you have received E Grade`)
//     }

//     else if (marks >=0 && marks < 40){
//         console.log(`Students has failed`)
//     }

//     else {
//         console.log(`Invalid marks`)
//     }
// }

// findGrand("Altaf", 88);
// findGrand("Arbaj" , 77);
//  findGrand("Sohel", 66);
// findGrand("Altaf" , 55);
// findGrand("Pathan" , 44);
// findGrand("Patel",3);
// findGrand("shan", 22);
// ---------------------------------------------------------------------------------------------

// function checkAge(age){
//     if (age <= 35)
//         console.log('Young Man')

//     else{
//         console.log('Old Man')
//     }
// }

// checkAge(30);
// ----------------------------------------------------------------------------------------------------

// function variableMarks(marks){
//     if (marks > 90){
//         console.log(`AA`)
//     }
//     else if(marks >80 && marks <= 90){
//         console.log(`AB`)
//     }
//     else if(marks > 70 && marks <= 80){
//         console.log (`BB`)
//     }
//     else if (marks > 60 && marks <= 70){
//         console.log(`BC`)
//     }
//     else if (marks > 50 && marks <= 60){
//         console.log (`CC`)
//     }
//     else if (marks > 40 && marks <= 50){
//         console.log (`CD`)
//     }
//     else if (marks > 30 && marks <= 40){
//         console.log (`DD`)
//     }
//     else if (marks <= 40) {
//         console.log (`FF`)
//     }
// }

// variableMarks(92);
// variableMarks(82);
// variableMarks(72);
// variableMarks(62);
// variableMarks(52);
// variableMarks(42);
// variableMarks(32);
// variableMarks(22);
// variableMarks(92);
// --------------------------------------------------------------------------------------------------------

for (var i = 0; i < 3; i++){
    let name = "Altaf patel";
    console.log ("Hi, my name is " + name);
}








