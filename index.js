
/*
//prints the message
console.log("hello world");
console.log("anima yadav");

//variables
//var(ES5)

var a ="anima";
console.log(a);
var broadwayTeacher =" bibek"; 
broadwayTeacher ="shyam";
//always use camelCase for joining two or more words for variables
console.log(broadwayTeacher);

//let , const(ES6)

let teacher ="anima";
teacher = "bibek";
console.log(teacher);

const teach ="bibek";
console.log(teach);
*/

/*
 create 4 variables using table,fan,
 chair,pen (multiline comment)
 */
//const
/*
const tableRound ="ikea";
const fanColor ="toofan";
const studentChair ="furniture";
const redpen =" camel pen";
console.log(tableRound,fanColor,studentChair,redpen);

console.log(5+11);
*/


//use var and let keyword for 4 variables

//var(ES5)
/*
var name1 = "anima yadav";
name1 = "bibek sharma";
var age1 = 22;
age1 = 25;
var address = "tinkune";
address = "balkumari";
var college ="new summit";
college = "national infotech";
console.log(name1,age1,address,college);

//let(ES6)

let teacherAge = 30;
let institute = "broadway";
let course = "javascript";
let courseFee = 25000;
teacherAge = 20;
institute = "Bi";
course = "js";
courseFee = "pencil";
console.log(teacherAge,institute,course,courseFee);

//const(ES6)

const myAge = 22;
const myPhone = 98098000;
const email = "animaydv800@gmail.com";
const myCourse = "mern stack";
console.log(myAge,myPhone,email,myCourse);
*/

//interactions
// prompt,alert,confirm
/*

const isAdult = confirm("are you adult");
console.log(isAdult);

const name = prompt("what is your name");
console.log(name);

alert("hello from anima yadav");
*/


//data types

//const pi =3.14;



/*
const gender = prompt("what is your gender? m/f");

// if(gender==="m") {
//     alert("you are male");
// } else {
//     alert("you are female")
// }
*/

/*
switch(gender){
case "m":
    alert("you are male");
    break;
    case "f":
        alert("you are female");
        break;
        default:
        alert("invalid input.try again");
}
*/


//write a program that welcomes user based on their name and password input.
 /*
const username = "animayadav";
const password = "animayadav";

if(username===password){
    alert("welcome anima yadav");
}else{
   alert("try again.invalid input");
}
*/

 /*
const userName = prompt("what is your username");
const password1 = prompt("enter password");
if(userName===password1){
    alert(`welcome ${userName}`); //string literal
}else{
    alert("try again.enter valid input.invalid un or pw");
    
}
*/


//write a program that asks user for
// addition  of 2 numbers and alert the result

/*
let num1 = 10;
let num2 = 9.998877;
let sum = num1+num2;
console.log("the addition of 2 numbers is:" +sum);
*/

/*
let num1 = prompt("enter your first number");
let num2 = prompt("enter your second number");
let result = num1+num2;
alert("the addition of 2 numbers is:" +result);
*/

/*
let num1 = 10;
let num2 = 9.998877;
let sum = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1/num2;
let mod = num1%num2;
alert("the addition of 2 numbers is:" +sum);
alert("the subtraction of 2 numbers is:" +sub);
alert("the multiplication of 2 numbers is:" +mul);
alert("the division of 2 numbers is:" +div);
alert("the mode of 2 numbers is:" +mod);
*/

//alert(10);
//alert('pi');

// string, number, boolean
// type conversion/type casting
//const userNum = Number(prompt("what is your number"));
/*
const userNum = prompt("what is your number");
const userTrueNum = Number(userNum);
const userString = String(userTrueNum);
const userBoolean = Boolean(userString);
*/


//ternary operator
/*
userName === password1
  ? alert(`welcome ${userName}`)
  : alert("try again.enter valid input.invalid un or pw");
  */


 // const day = prompt("enter the day");
 // day === "sun" ? alert("sun") : day === "mon" ? alert("mon") : alert("tues");


  //const month = prompt("enter the month");
  //month === "jan" ? alert("jan") : month === "feb" ? alert("feb") : alert("mar")

  //ask user for name and time(number)
  // 5 to 12 => morning
  // 12 to 3 =>afternoon
  // 3 to 6 => evening

/*
  const myName = prompt("enter your name");
  const time = Number(prompt("enter your entry time"));
  time >= 5 && time <=12
  ? alert(`good morning ${name}`)
  : time >= 1 && time  <3
  ? alert(`good afternoon ${name}`)
  : alert(`good evening ${name}`);
  */


  // 1 to 10 print
  // starting condition,stopping condition,running condition
 

 /*
  for(let i = 0; i<= 10; i++){
    console.log(i);
  }

  let j = 1;
  while (j <=10) {
    console.log(j);
    j++;
  }

  let k = 1;
  do {
    console.log(k);
    k++;
  } while (k<=10);
  */


// 2,3,5 while,do while for loop multiple table
/*
  let num = 2;
  let numberOfMultiples = 5;

  for( i = 1; i<=numberOfMultiples; i++){
  let multiples = num*i;
  console.log(multiples);
  }


  let num1 = 3;
  let numberOfMultiples1 = 7;
  let j = 1;
  while(j<=numberOfMultiples1){
    let multiples1 = num1*j;
    console.log(multiples1);
    j++;
  }


   let num2 = 5;
   let numberOfMultiples2 = 9;
   let k = 1;
   do {
    let multiples1 = num2*k;
    console.log(multiples1);
    k++
   } while(k<=numberOfMultiples2);
   */

   //multiplication table for 2,3,5 using for loop
   /*
   // for loop for 2
   console.log("multiplication table for 2");
   for( let i =1; i<=10; i++) {
    let result = 2*i;
    console.log(result);
   }
   */

   /*
   // while loop for 2
   console.log("multiplication table for 2");
    let i = 1;
    while( i <= 10) {
    let result = 2 * i;
    console.log(result);
    i++;
   }
   */


   /*
   // do while loop for 2
   console.log("multiplication table for 2");
   let i = 1;
   do {
     let result = 2 * i;
     console.log(result);
     i++;
   } while (i <= 10);
   */


   /*
  // for loop for 3
   console.log("\multiplication table for 3");
   for (let i = 1; i <= 10; i++) {
     let result = 3 * i;
     console.log(result);
   }
   */

   /*
   // while loop for 3
   console.log("\multiplication table for 3");
   let i = 1;
   while( i <= 10) {
    let result = 3 * i;
    console.log(result);
    i++;
   }
   */
  
   /*
   // do while loop for 3
    console.log("multiplication table for 3");
    let i = 1;
    do {
      let result = 3 * i;
      console.log(result);
      i++;
    } while (i <= 10);
    */

   /*
   // for loop for 5
   console.log("multiplication table for 5");
   for (let i = 1; i <= 10; i++) {
     let result = 5 * i;
     console.log(result);
   }
   */

   /*
   // while loop for 5
   console.log("multiplication table for 5");
   let i = 1;
   while (i <= 10) {
     let result = 5 * i;
     console.log(result);
     i++;
   }
   */


   /*
   // do while loop for 5
   console.log("multiplication table for 5");
   let i = 1;
   do {
     let result = 5 * i;
     console.log(result);
     i++;
   } while (i <= 10);
   */


  // multiplication table for numbers using prompt
     /*
    let number = prompt("enter your number");
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      console.log(result);
    }
    */

      /*
     let number1 = prompt("enter your number");
     let j = 1;
     while( j <= 10) {
      let result1 = number1*j;
      console.log(result1);
      j++;
     }
     */

      /*
     let number2 = prompt("enter your number");
     let k = 1;
     do {
      let result2 = number2*k;
      console.log(result2)
      k++;
     } while( k<= 10);
     */

     // write a js program to check whether a given positive number is a multiple of 3 0r 7.

     const num = prompt("enter the number:");
     if ( num % 3 === 0 || num % 7 ===0) {
      console.log( num +  "n is a multiple of 3 0r 7");
     } else {
      console.log(num +  "is  not a multiple of 3 0r 7");
     }
     


     /* Write a JavaScript program to compute the sum of the two given integers.
      If the two values are the same, then return triple their sum.
      */

     /*
     const num1 = parseInt(prompt("enter the first integer"));
     const num2 = parseInt(prompt("enter the second integer")); 
     if(num1===num2) {
       sum1 = 3* (num1 + num2);
     } else {
       sum1 = num1+num2;
     }
    console.log( "result :" ,sum1);
    */













