// Math : Math is a built-in object in JavaScript that provides a collection of mathematical properties and methods.
// It is used to perform various mathematical operations and calculations.

// --------------------------- Properties and Methods of Math ---------------------------

// Math.E is khown as Euler's number.
// Math.E: Represents the base of natural logarithms (e).
// let e = Math.E;
// console.log(e);         // Output: 2.718...

// Math.PI: Represents the ratio of a circle's circumference to its diameter.
// let pi = Math.PI;
// console.log(pi);        // Output: 3.141592653589793

// -----------------------

// Math.abs(): Returns the absolute value of a number.
// let num = -5;
// // let num = 21;
// // let num = 0;
// let absoluteValue = Math.abs(num);
// console.log(absoluteValue);     // Output: 5

// -----------------------


// Math.round(): Returns the nearest integer to a given number.

// let num = 3.5;           // if the number after decimal is '5' or greater than '5' , it round it up ...
// let roundedNum = Math.round(num);
// console.log(roundedNum);     // Output: 4

// let num = 3.9;           // if the number after decimal is '5' or greater than '5' , it round it up ...
// let roundedNum = Math.round(num);
// console.log(roundedNum);     // Output: 4

// let num = 3.2;           //  if the number after decimal is less than '5' , it round it down ...
// let roundedNum = Math.round(num);
// console.log(roundedNum);     // Output: 3

// let num = 3.49;
// let roundedNum = Math.round(num);
// console.log(roundedNum);


// -----------------------

// Math.ceil(): Returns the smallest integer greater than or equal to a given number.
// let num = 3.1;
// let num = 3.7;
// let ceiledNum = Math.ceil(num);
// console.log(ceiledNum);     // Output: 4

// -----------------------

// Math.floor(): Returns the largest integer less than or equal to a given number.
// // let num = 3.1;
// // let num = 3.7;
// let num = 3.9;
// let flooredNum = Math.floor(num);
// console.log(flooredNum);     // Output: 3

// -----------------------

// Math.trunc(): It simply cuts off (or truncates) everything after the decimal point.
// let num = 3.9;
// let truncatedNum = Math.trunc(num);
// console.log(truncatedNum);       // Output: 3

// -----------------------

// Difference between "Math.round()" ," Math.trunc()" , "Math.floor()" and "Math.ceil()" :

// Math.round(): It returns the nearest integer to a given number.
// Math.trunc(): It simply cuts off (or truncates) everything after the decimal point.
// Math.floor(): Returns the largest integer less than or equal to a given number.
// Math.ceil(): Returns the smallest integer greater than or equal to a given number.

// | Method :              | Enter (4.9) :        | Enter (-4.9) :        | Description :                   |

// | Math.trunc()          | 4                    | -4                    | Removes decimal part (toward 0) |
// | Math.floor()          | 4                    | -5                    | Rounds down (toward -∞)         |
// | Math.ceil()           | 5                    | -4                    | Rounds up (toward +∞)           |
// | Math.round()          | 5                    | -5                    | Rounds to nearest integer       |

// -----------------------

// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
// let randomNum = Math.random();
// console.log(randomNum);     // Output: A random number between 0 and 1

// -----------------------

// Math.sqrt(): Returns the square root of a number.
// let num = 25;
// let squareRoot = Math.sqrt(num);
// console.log(squareRoot);     // Output: 5

// -----------------------

// Math.cbrt(): It returns the cube root of a number.
// let num = 27;
// let cubeRoot = Math.cbrt(num);
// console.log(cubeRoot);       // Output: 3

// -----------------------

// Math.pow(): Returns the result of raising a number to a specified power.
// let base = 2;
// let exponent = 3;
// let result = Math.pow(base, exponent);
// console.log(result);     // Output: 8

// -----------------------

// Math.min(): Returns the smallest number among the given numbers.
// let num1 = 5;
// let num2 = 3;
// let num3 = 7;
// let smallestNum = Math.min(num1, num2, num3);
// console.log(smallestNum);        // Output: 3

// -----------------------

// Math.max(): Returns the largest number among the given numbers.
// let num1 = 5;
// let num2 = 3;
// let num3 = 7;
// let largestNum = Math.max(num1, num2, num3);
// console.log(largestNum);         // Output: 7

// -----------------------

// Math.sign(): It returns '-1' if the number is negative, '0' if the number is zero, and '1' if the number is positive.
// let num = -5;
// // let num = 0;
// // let num = 5;
// let sign = Math.sign(num);
// console.log(sign);       // Output: -1

// -----------------------

// Math.log(): Returns the natural logarithm (base e) of a number.
// let num = 15;
// let naturalLog = Math.log(num);
// console.log(naturalLog);         // Output: 2.70805020110221

// -----------------------

// Math.log10(): Returns the base 10 logarithm of a number.
// let num = 25;
// let base10Log = Math.log10(num);
// console.log(base10Log);         // Output: 1.3979400086720377

// -----------------------

// Math.exp(): Returns the exponential (base e) of a number.
// let num = 2;
// let exponential = Math.exp(num);
// console.log(exponential);        // Output: 7.38905609893065

// console.log(Math.exp(1));   // 2.718281828...  (e^1)
// console.log(Math.exp(2));   // 7.389056099...  (e^2)
// console.log(Math.exp(0));   // 1               (e^0 = 1)
// console.log(Math.exp(-1));  // 0.367879441...  (1/e)

// -----------------------

// "Math.log() and Math.exp() are inverse of each other".

// console.log(Math.exp(2))                 // = e² ≈ 7.389

// console.log(Math.log(7.389))            // ≈ 2

// it means they undo each other’s effect --> just like addition and subtraction are opposites.

// Math.log(Math.exp(2)) === 2;
// Math.exp(Math.log(7.389)) === 7.389;

// -------------------

// They “cancel out” each other — just like :

// Math.sqrt(x * x) === x


// ---------------------------------- Trigonometry Functions : ----------------------------------


// Math.sin(): Returns the sine of a given angle in radians.

// let num = 45;                      // This is 45 radians 
// let sineValue = Math.sin(num)    
// console.log(sineValue);           // Output: 0.8509035245341184

// ---------------------

// Math.cos(): Returns the cosine of a given angle in radians.

// let num = 45;                       // This is 45 radians 
// let cosineValue = Math.cos(num)    
// console.log(cosineValue);           // Output: 0.5253219888177297

// ---------------------

// Math.tan(); Returns the tangent of a given angle in radians.

// let num = 45;                       // This is 45 radians 
// let tangentValue = Math.tan(num)    
// console.log(tangentValue);           // Output: 1.6197751905438535

// -------------------------------------

