// משימה ראשונה
// function myName(){
// for (var i=0 ; i<5 ; i++)
//     console.log("Eden");
// }
// myName();
// //===================================================================

// משימה שניה :
// function mySecondName(SecondName) {
//     for (var i=0 ; i<5 ; i++){
//     console.log(SecondName);
// }}

// mySecondName("Eden");

// //===================================================================

// משימה שלישית :

// function sumNumber(){
//     var x=10 ; var y=20;
//     console.log(x+y);
// }

// sumNumber();

// //===================================================================

// משימה רביעית:
//

// function allNumbers(x , y ){
//     console.log(x+y);
// }

// allNumbers(5,5);
// allNumbers(90,10);
// //===================================================================

// משימה חמישית :

// כתוב פונקציה המקבלת שני מספרים ומחזירה מינימום.

// function minNumber(num1, num2) {
//   if (num1 > num2) {console.log(num2);}
//   else if (num1 < num2) {console.log(num1);}
// }

// minNumber(5,9)
// minNumber(100,50)

// //===================================================================

// משימה שישית:

// function sumAllNumbers(num1) {
//     var sumAll=0;
//     while (num1 > 0) {
//         var modulu = num1 % 10 ;
//         var num1 = (num1 / 10) - (modulu / 10);
//         sumAll = modulu + sumAll ;
//     }
//     return(sumAll)
// }

// var modulu = sumAllNumbers(255)
// console.log(modulu);

// //===================================================================

// שאלה שביעית:
// סעיף 1
// debugger

// var arrayNumber = [22, 58, 47, 56, 95, 100];

// function sumOfAllNum(arrayNumber) {
//     var sum = 0;
//     for (var i = 0; i < arrayNumber.length; i++) {
//         sum = arrayNumber[i] + sum;
//     }
//     return(sum)
// }

// var x = sumOfAllNum(arrayNumber);
// console.log(x);

// סעיף 2 :

// var arrayNumber = [22, 58, 47, 56, 95, 100];

// function sumOfAllNum(arrayNumber) {
//     var sum = 1;
//     for (var i = 0; i < arrayNumber.length; i++) {
//         sum = arrayNumber[i] * sum;
//     }
//     return(sum)
// }

// var x = sumOfAllNum(arrayNumber);
// console.log(x);

// סעיף 3

// var arrayNumber = [22, 58, 10, 56, 95, 100];
// var min = arrayNumber[0];

// function minNumber(arrayNumber) {
//     for (var i=1 ; i<arrayNumber.length ; i++){
//         if (min>arrayNumber[i]) {
//             min=arrayNumber[i];
//         }
//     }
//     return(min)
// }

// var x = minNumber(arrayNumber);
// console.log(x);

// סעיף 4 :

// var arrayNumber = [22, 58, 10, 56, 95, 100];
// var max = arrayNumber[0]

// function maxNumber(arrayNumber) {
//     for (var i=1 ; i<arrayNumber.length; i++){
//         if(max<arrayNumber[i]){
//            max=arrayNumber[i]
//         }
//     }
//     return(max)
// }

// var x = maxNumber(arrayNumber);
// console.log(x);

// סעיף 5 :

// מחזירה מערך הקצר ב-2 איברים.

// var arrayNumber = [22, 58, 10, 56, 95, 100];
// var x = arrayNumber.length;

// // console.log(x);

// function removeArray(arrayNumber) {
//    arrayNumber.splice(4)
//    arrayNumber.splice(5)
//    return(arrayNumber)

// }

// var y = removeArray(arrayNumber);
// console.log(y);

// //===================================================================

// שאלה שמינית:

// כתוב פונקציה המקבלת מחרוזת ומחזירה את האורך שלו.

// var string = "Eden"

// function stringLength (string) {
//   var sum = string.length
//   return (sum)
// }

// var x = stringLength("ccccccccccccccccccccccccccccccccccccccccccccc")
// console.log(x)

// //===================================================================
// שאלה תשיעית :

// var arrayNumber = [23, 55, 41, 79, 78, 10, 29];

// var userInput = Number(prompt("Enter Your Number : "));

// function removeArray(arrayNumber) {
//   for (var i = 0; i < arrayNumber.length; i++){
//     if (userInput == arrayNumber[i]) {
//         let index =i;
//        arrayNumber.splice(index , i);
//       [arrayNumber[i]]
//        console.log(arrayNumber , i)
//     } else {
//       console.log("לא קיים");
//     }
// }}

// removeArray(arrayNumber);


// //===================================================================

// שאלה עשירית :

// var arrayNumber2= [10,20,30,40,50,60,70];
// var arrayNumber = [22, 58, 47, 56, 95, 100];

// function functionArray (arrayNumber){
//     for (var i=0; i< arrayNumber.length ; i++){
//         arrayNumber[i]=arrayNumber[i]*3;
//     }
//     return (arrayNumber)
// }

// var x = functionArray(arrayNumber);
// console.log(x);


// //===================================================================


// שאלה אחת עשרה :

// var arrayNumber = [10,2,10,2,50,88,66,10];


// function numberArray(arrayNumber) {
//     for(var i=0 ; i<arrayNumber.length ; i++){
//     if() {
//         arrayNumber[i]
//     }
//     }
// return();
// }


