//*************EXPLICIT CONVERSION*************

//Displaying number in number format and its type in the console
// let num = 9
// console.log(num, typeof num);

// //Converting number into string format also displaying its type in the console
//  num  = String(5)
// console.log(num, typeof num)

// //Converting string into number format also displaying its type in the console
// num  = Number ("5465495")
// console.log(num, typeof(num))

//*********************************************

//*************COERCION************************
//When we perform any arithematic operation except addition on the string type then Js consider it as a number.
// When the plus/ addition operator perform anything with string then it gets concatinated
// let x = 2;

// x= x + "Aruna "
// console.log(x, typeof(x))

x =  10 - "Aruna"
console.log(x, typeof(x))

// x =  2 * "6"
// console.log(x, typeof(x))

// x =  22 / "2"
// console.log(x, typeof(x))

// x =  51 % "5"
// console.log(x, typeof(x))

// // Trying with boolean value

// x = !x
// console.log(x, typeof(x))

// //Some truthy and Falsy values

// console.log(Boolean(-1))
// console.log(Boolean(0))
// console.log(Boolean(1))
// console.log(Boolean(2))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
