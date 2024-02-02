
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

     /*
     const num = prompt("enter the number:");
     if ( num % 3 === 0 || num % 7 ===0) {
      console.log( num +  "n is a multiple of 3 0r 7");
     } else {
      console.log(num +  "is  not a multiple of 3 0r 7");
     }
     */
     


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



    //function define
    //ES5
    /*
    function sum (a,b) {
      // logic
      return a+b;
    }

    const result = sum(2,2);
    const result1 = sum(2, 244);
    const result2 = sum(2, 209);
    const result3 = sum(2, 2435);
    console.log(result,result1,result2,result3);
    */



    //ES6
    /*
    const sum = (a,b) => {
      return a+b;
    };

    const result = sum(2, 2);
    const result1 = sum(2, 244);
    const result2 = sum(2, 209);
    const result3 = sum(2, 2435);
    console.log(result, result1, result2, result3);
    */

    // write a function to do multiplication table of  2
    // define function
    /*
    const mul = (table) => {
      let i=1;
      do {
        console.log(table*i);
        i++;
      } while(i<=10);
    };

    //function call
    mul(2);
    */
      


    // write a function to find the area of rectange

    /*
      function area(l, b) {
        // logic
        return l * b;
      }
         const result4 = area(4,5);
         console.log(result4);
         */

         //wite a js function that reverses a number
          /*
         const reverse = (number) => {
          const str = String(number);
          let newNum = "";
          for(let i = str.length-1; i>=0;i--){
            newNum += str[i];
          }
          return newNum;

         };

         const res = Number(reverse(12345));
         console.log({res});
         */



         // write a js function that creates a commaformatter.
         // exmaple x= 10000; expected output:10,000
         // exmaple x= 1000000; expected output:1,000,000


         // 1. define a function
         // 2. call a function (10000) as param
         // 3. convert to string
         // 4. calculate the length of string

         /*
          const commaFormatter = (number) => {
          const string = String(number);
          let newString = "",
          reverseString = "",
          counter = 0;

          for (let i = string.length-1; i>=0; i--){
            console.log({counter,newString});
            if(counter===3){
              newString += ",",
              counter=0;
            }
            newString += string[i];
            counter++;
          }
          for(let i = newStringtring.length-1; i>=0; i--){
            reverseString += newString[i];
          }

          return reverseString;
        };

        const re = commaFormatter(1000000);
        console.log({comma: re});

        */



        // write a js function that converts regular text to proper case
        // eg anima yadav= Anima Yadav
                
        /*
          function ProperCase(inputText) {
          if (!inputText) {
          return '';
          }

         let result = '';
         let capitalizeNext = true;
        for (let i = 0; i < inputText.length; i++) {
        const currentChar = inputText.charAt(i);

        if (capitalizeNext && currentChar !== ' ') {
         result += currentChar.toUpperCase();
         capitalizeNext = false;
        } else {
          result += currentChar.toLowerCase();
        }
  
           if (currentChar === ' ') {
            capitalizeNext = true;
            }
          }

          return result;
          }

            const inputText = prompt("enter the text");
            const properCaseText = ProperCase(inputText);

            console.log(`Original text: ${inputText}`);
            console.log(`Proper case text: ${properCaseText}`);
            */

        // write a js function that converts long text to ... format
        //"raktim is a mern stack teacher". he is teaching us mern course from 20th jan"
        // ||
        // v
        // "raktim is a mern stack teacher. he is...."

        /*
        function truncateText(text, maxLength) {
          if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
          } else {
            return text;
          }
        }
  
        const longText = "raktim is a mern stack teacher. he is teaching us mern course from 20th jan.";
        const truncatedText = truncateText(longText, 37);

        console.log(`Original text: ${longText}`);
        console.log(`Truncated text: ${truncatedText}`);

        */

        // write a js function that replaces c++ to MERN
        // "raktim is a c++ stack teacher". he is teaching us mern course from 20th jan"
        // "raktim is a MERN stack teacher". he is teaching us MERN course from 20th jan"
        /*
        
         function replaceText(originalText,searchText,replacementText) {
          const modifiedText = originalText.replace(new RegExp(searchText,'g') , replacementText);
          return modifiedText;
         }

          const inputText =
            "raktim is a cpp  teacher. raktim shrestha is teaching us c++ course from 20th jan. cpp is advanced course";
           const searchText = "cpp";
           const replacementText = "MERN stack";
           modifiedText = replaceText(inputText,searchText,replacementText) ;

           console.log(`original text : ${inputText}`);
           console.log(`replacedtext : ${modifiedText}`);
           */
           

         /*
         function replaceText(Text) {
           const modifiedText = Text.replace(/c\+\+/gi , "MERN stack ");
           return modifiedText;
         }
         const originalText = "raktim is a c++  teacher. he is teaching us c++ course from 20th jan. c++ is advanced course";
         const modifiedText = replaceText(originalText);

         console.log(`Original text: ${originalText}`);
         console.log(`Modified text: ${modifiedText}`);
         */


         // write a js function to function that validates if the user input string is email or not


         // write a js function that count number of vowels used in the string.


         // default 
         /*
         const sayHi = (name) => {
          console.log(`hi ${name}`);
         };
         sayHi = "anima yadav"
         */

         //parameterized

         /*
         // default values in param
         const sayHiAgain = (fname,lname) => {
          console.log(` hi again ${fname} ${lname}`);
         };
         */
         /*
         // implicit
         const sum = (a,b) => a+b;
         // explicit
         const sum1 = (a,b) => {
          return a+b;
         };
         // IIFE
         //immediately invoked functional expression
         (function () {
          console.log("hello");
         }) ();
         // closure
         // inline
         const a = function () {};
         // anynomous
         (function () {
          return "hello";
         });
         */
         
         // call back 
         /*
         const print = (name) => {
          return `print is ${name}`;
         };

         const mainFn = (fname,lname,cb) => {
          const name = fname.concat("", lname);
          return cb(name);
         };

         const resu = mainFn("anima","yadav",print);
         console.log(resu);
         */

         // write a js function that validates if the password is valid password or not
         //validation rules are
         // at least 1 lowercase
         // at least 1 uppercase
         // at least 1 number
         // at least 1 symbol
         // password length >= 8

         // output true or false


         //
         /*
         const obj = {
          name : "anima",
          password : "123456",
          email : "animaydv800@gmail.com",
          address : "kalaiya",
         };

         // spread operator
         const { password, address , ...test} = obj; // object destructuring
         console.log({test});
         */

         // use given object and loop through its properties
         // and if it has property "discount"

         /*
         let prod = {
          name : "headphones",
          price : 83.7,
          discount : "7%",
         };
         
         const seeDiscount = (obj) => {
          return Object.hasOwn(obj, "discount")
          ? `already discounted by ${obj.discount}`
          : " no discount found";
         };
         

         const resp = seeDiscount(prod);
         console.log({resp});

         const findDiscount = (obj) => {
          delete obj.discount;
          const discountPercent = obj.price > 100 ? 10 :7;
          obj.discount = `${discountPercent}%`;
          obj.price = obj.price -(discountPercent/100)* obj.price;
          return obj;
         };

         console.log(seeDiscount(prod));
         */
         
        /*
         // CRUD operations in js array

         // creating an array in js
         let fruits = ["apple", "banana", "orange", "litchi"];
         console.log(fruits);

         // reading an array in js

         // reading array using index
        console.log(fruits[0]);
        console.log(fruits[2]);

        // reading array using  loop
        for(let i = 0; i<fruits.length; i++) {
          console.log(fruits[i]);
        }

        // updating array in js
        fruits[0] = "mango";
        fruits[1] = "watermelon";
        fruits[2] = "grapes";
        fruits[3] = "pineapple";
        console.log(fruits);

        // deleting array in js
       // fruits.splice(2,2);
       //fruits.pop();
       //fruits.shift();
       console.log(fruits);
        */
        


         // sort the age in ascending order by using array 
         /*
         const group = [
         { name : "raktim", age : 30},
         {name: "ruchi",age : 26},
         {name:"anima" ,age : 22},
         {name : "sumit" ,age :19},
        ];

        group.sort ((a,b) => a.age-b.age);
        console.log(group);
        */
  

        // sort array in descending order
        /*
        const group = [
          { name: "raktim", age: 30 },
          { name: "ruchi", age: 26 },
          { name: "anima", age: 22 },
          { name: "sumit", age: 19 },
        ];

        group.sort((a, b) => b.age - a.age);
        console.log(group);
        */

        // write a js function that checks if the user has access or not.
        // return boolean value
        /*
        const userRole = ["user","vendor"];
        const sysRole = ["admin","vendor"];


        const checkRole = ( userRole, sysRole) => { 
          // compare two arrays and return boolean result
           const Access = userRole.some((role) => sysRole.includes(role));
           return Access;
        };
       
        const Access = checkRole(userRole, sysRole);
        console.log(Access);
        */
        

        // write a js function that creates slug
        // eg: Understanding Nestjs Architecture
        //=> understanding-nestjs-architecture

        /*
        function createSlugs(heading) {
          return heading .toLowerCase() .replace(/\s+/g, "-") .replace(/[^\w-]/g, "");
        }

        const originalheading = "Understanding Nestjs Architecture";
        const slug = createSlugs(originalheading);

        console.log(slug);
        */


        // write a js function that creates a sum of numbers from 1 to 10
        // eg: [1,2,3,4,5,6,7,8,9,10]
        /*
        const getSum = (arr) => arr.reduce((acc,curr) => acc +curr,0);
        const resp = getSum([1,2,3,4,5,6,7,8,9,10]);
        console.log({resp});
        */
       

        // let food = ["noodle","pasta","ice-cream"];
        // let food = ["fries","ice-cream","pizza"];
        // compare the 2 arrays and find the common food if any
        /*
        let food1 = ["noodle","pasta","ice-cream"];
        let food2 = ["fries","ice-cream","pizza"];

        let commonFood = food1.filter((foodItems) => food2.includes(foodItems));
        console.log("Common food:", commonFood);
        */

        // immutable js
        // date
        
     //write a js function that works as a pagination
       // const arr = ["raktim","ruchi","anima","sumit","samundra","kuber"];
      //  const page = 1; //dynamic 
       // const limit = 2; // dynamic
        // example
        // page 1 => ["raktim" , "ruchi"]
        // page 2 => ["anima","sumit"]
        // page 3 => ["samundra","kuber"]
        // page 4 => []

        /*
        const arr = ["raktim","ruchi","anima","sumit","samundra","kuber"];
        const page = 4; //dynamic 
        const limit = 2; // dynamic
        
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const currentPage = arr.slice(startIndex, endIndex);

        console.log(`Page ${page} =>`, currentPage);
        */

        /*
        function paginateArray(arr, page, limit) {
          const startIndex = (page - 1) * limit;
          const endIndex = page * limit;
          const currentPage = arr.slice(startIndex, endIndex);
          return currentPage;
        }

        const arr = ["raktim", "ruchi", "anima", "sumit", "samundra", "kuber"];
        const page1 = paginateArray(arr, 1, 2);
        const page2 = paginateArray(arr, 2, 2);
        const page3 = paginateArray(arr, 3, 2);
        const page4 = paginateArray(arr, 4, 2);

        console.log("Page 1 =>", page1);
        console.log("Page 2 =>", page2);
        console.log("Page 3 =>", page3);
        console.log("Page 4 =>", page4);
        */



        

        

        


        







    







