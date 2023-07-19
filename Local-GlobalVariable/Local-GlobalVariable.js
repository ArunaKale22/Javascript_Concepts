
//Working with global variables

// let user = 'Aruna'// Global variable

// function greet(user)
//     {
//     return `Hello ${user}`
//     }

// let str = greet(user)
// console.log(str)
//The global variable can be used as local varibale too, means 
//it can be used within the function (greet())

//Working with local variables

// let user = 'Aruna'

// function greet(user)
//     {
//         let num = 5 //Local Varibles
//         console.log(num)// Calling local varibles within the function, which will print the output
//         return `Hello ${user}` 
 
//     }

//     console.log(num)// using local variables outside the function
//     //Here it will show error as "num is not defined". This means 
//     //that local variables cannot be used outside the function
//     let str = greet(user)
//     console.log(str)

//Adding two numbers in Function.

function add(num1, num2, num3=2)
    {
        console.log(num1 , num2, num3)
       return num1 + num2 + num3;
    }

    let result = add(23,54)
    console.log(result)


    