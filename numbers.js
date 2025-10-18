// ----------------- Generating Random Numbers between 0 and 1 : ----------------

// const random = Math.random();
// console.log(random);

// let randomNumber = Math.random() * 10            // Multiplies every number by 10 ....
// console.log(randomNumber)

// -------------- Rounding Numbers : ----------------

// let randomNumber = Math.round(0.12345)           // 0.12345 ~ 0
// console.log(randomNumber)

// let randomNumber = Math.round(4.786)             // 4.786 ~ 5
// console.log(randomNumber)

// let randomNumber = Math.round(21.435)            // 21.435 ~ 21
// console.log(randomNumber)

// let randomNumber = Math.round(21.543)            // 21.543 ~ 22
// console.log(randomNumber)

// let randomNumber = Math.round(-1.5)              // -1.5 ~ -1
// console.log(randomNumber)

// let randomNumber = Math.round(-1.51)             // -1.51 ~ -2
// console.log(randomNumber)

// let randomNumber = Math.round(-1.59)             // -1.59 ~ -2
// console.log(randomNumber)

// let randomNumber = Math.round(-12.45)            // -12.45 ~ -12
// console.log(randomNumber)

// let randomNumber = Math.round(-12.61)            // -12.61 ~ -13
// console.log(randomNumber)

// --------------- Using "Ceil" Instead of "Round" : ----------------

// ---------- " Ceil Function rounds the number to the nearest larger integer : " -----------

// ---------- " Ceil ka method number ko qareebi baray number/integer tak lay jaata hai" ---------

// let number = Math.ceil(0.1)                   // 1
// let number = Math.ceil(0.00001);              // 1
// let number = Math.ceil(0.000011111);          // 1
// console.log(number)

// let number = Math.ceil(-0.0001);              // 0
// console.log(number)

// let number = Math.ceil(1.00001);              // 2
// console.log(number);

// --------------------- Using "Floor" Instead of Round : -----------------

// ---------------- " Floor Function rounds the number to the nearest larger integer : " -----------

// ----------- Floor ka method number ko qareebi chotay number ki taraf lay jaata hai : ------------

// let number = Math.floor(1.999)                    // 1.999 ~ 1
// console.log(number)

// let number = Math.floor(0.1234)                   // 0.1234 ~ 0
// console.log(number)

// let number = Math.floor(-0.0001)                  // -0.0001 ~ -1
// console.log(number)

// let number = Math.floor(-1.999)                   // -1.999 ~ -2
// console.log(number)

// --------------------------------------------------------------------------------------------------------

// ------------------ Generating Random Numbers From 1 To 6 : --------------------

// let number = Math.ceil(Math.random() * 6)
// console.log(number)

// ------------------ Generating Random Numbers From 0 to 6 : --------------------

// let number = Math.round(Math.random() * 6)
// console.log(number)

// let number = Math.floor(Math.random() * 7)
// console.log(number)

// ------------------ Generating Integers From 1 To 6 :-------------------------

// 1. Using Floor : ------------------------

// let number = Math.floor(Math.random() * 6) + 1
// console.log(number)

// This generates random integers from 1 to 6 ....

// 2. Using Ceil : --------------------------

// let number = Math.ceil(Math.random() * 6)
// console.log(number)

// This also works but in a very rare case , you may get "0" ....

// ------------------------------------------------------------------------------------------

// Type Casting :

// 1. String to Number : ----------------------------

// let age = prompt("Enter Your Age :")
// console.log(age + 1)

// This concatenates "age" with "1" because the input taken through prompt is a String ....
// So we have to convert the type of "age" into Number from String ....
// There are three methods/ways to convert a String to Number ....

// 1. Write "Number" / Use "Number" Keyword :

// let age = Number(prompt("Enter Your Age :"))
// "OR"
// // age = Number(age)
// console.log(age + 1)

// 2. Write "parseInt" / Use "parseInt" Keyword :

// let age = parseInt(prompt("Enter Your Age :"));
// "OR"
// // age = parseInt(age)
// console.log(age + 1);

// 3. Write "+" Sign / Use "+" Sign :

// let age = +(prompt("Enter Your Age :"));
// // "OR"
// // // age = +(age)
// console.log(age + 1);
// console.log(typeof age );

// -----------------------

// ---------------------- Converting String "OR" Number/Integer to Float : -----------------------

// If the User gives float/decimal value then these Number converting Methods also converts that Number (Float Value) to Integer :
// So , if we want to show the "Float Value / Decimal Value" then we should use "parseFloat" Method :

// let age = (prompt("Enter Your Age :"));
// // "OR"
// // age = parseFloat(age)
// console.log(age + 1);
// console.log(typeof age);        // Number

// ----- If the Decimal Value is too Long , and we have to show the Decimal Value by only a specific place ,
// then we use "toFixed()" Method to show the Decimal Value to a specific place : -------------------------

// let floatNumber = prompt("Enter a Float Number :");
// let stringToFloat = parseFloat(floatNumber)
// stringToFloat += 1
// if(floatNumber === null || floatNumber === "" || floatNumber === undefined || floatNumber === NaN){
//     alert("Please Enter a Number")
//     location.reload()
// }
// console.log(`After adding 1 to ${floatNumber} , it becomes : ${stringToFloat}`)
// // Fixing the Float Value to "2" Decimal places :
// floatFix = parseFloat(stringToFloat.toFixed(3))
// console.log(`${floatFix} is a ${typeof floatFix}`)

// ---------------------------------------------

// Same Code :

// let float1 = prompt("Enter a Float Number :");
// let stringToNumber = parseFloat(float1);
// stringToNumber += 1;
// console.log(stringToNumber);
// let floatFixToTwoDecimalPlaces = parseFloat(stringToNumber.toFixed(2));         // fix to 2 decimals
// console.log(floatFixToTwoDecimalPlaces);

// ---------------------------------------------

// ---------------------- Converting "Number" to "String" : --------------------------

// let number1 = 100;
// console.log(number1 + " is a " + typeof number1 + ".");

// 1. Using "toString()" Method :

// let number2 = 50 
// let string1 = number2.toString();
// console.log(string1 + " is a " + typeof string1 + ".");


// 2. Using "String()" Keyword :

// let number3 = 25
// let string2  = String(number3);
// console.log(string2 + " is a " + typeof string2 + ".");

// -------------------------------------------------------------------------------------------------------

// Difference Between Methods(Functions) and Properties :

// The fundamental difference between a method and a property is that : A method do some work or task on that place 
// where that method was used but A Property did not perform any type of task on that place where it was used or 
// called but it gives some type of result / answer from the place where it was used or called ....

// Examples : 

// 1. A property ".length" is used on a string , it will not perform any type of task on the String instead 
// it calculates and gives the result/answer (Length) of that String .....

// 2. A method ".toString()" or "new Date()" is used , So the method ".toString()" will convert the Number (or 
// the thing on which that method was used) to String Type , same as the method "new Date()" will generates the 
// Date and the method "Math.random()" generates a random number ....

// So! The Method is Processing / Doing some type of Work / Performing a Task etc but A Property is only giving 
// some type of Answer / Data etc from the existing thing ....

// -------------------- Property : ---------------------

// ".length" is a Property which helps us in identifying the Length of a String :
// So! for property , we do not use Parenthesis in the last .... 

// let countryName = "Pakistan"
// Length = countryName.length
// console.log(Length) 

// let number = 123
// Length = number.length
// console.log(Length) 
// This shows "Undefined" because Length is a property which should only be used for Strings , not for Numbers ...


// --------------------- Methods : ----------------------

// ".toString()" is a method , which is pre-defined , it is used for converting a Number to a String :
// So! for methods , we have to use Parenthesis in the last of the Method --> ".toString()"...
 
// let number = 50 
// let string = number.toString();
// console.log(string + " is a " + typeof string + ".");

// "Math.random()" is also a pre-defined method which is use for generating random numbers (between 0 and 1) :
// So! because of a Method , we are also using Parenthesis in the last of the Method --> "Math.random()"

// let number = Math.random()
// console.log(number)


// -----------------------------------------------------------------------------------------------------

