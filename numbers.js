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

