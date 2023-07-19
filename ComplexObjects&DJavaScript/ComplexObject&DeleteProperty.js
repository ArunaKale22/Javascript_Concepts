//Complex objects i.e. an object inside the object

// let employee = {
//     name : 'Aruna',
//     designation : 'QA',
//     'work exp' : 5,
//     laptop : {
//         cpu : 'i7',
//         ram : 4,
//         brand : 'HP',
//     }
// }

// console.log(employee.laptop.brand.length)

// //Concept of double question mark (??)

// Lets say we have a property as brand1 for example
let employee = {
    name : 'Aruna',
    designation : 'QA',
    'work exp' : 5,
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'HP',
        city : {
            shops : 'grocery',
            hospitals : 'Orthopedic'
        }    
    }
    
}

//console.log(employee.laptop.brand)
//Here js does not show any error as brand is not defined but instead 
//it will show as 'Undefined' in output.

//console.log(employee.laptop.brand.length)
//here it will show error as "TypeError: Cannot read property 'length' of 
//undefined"

// Deleting an object 

delete  employee.city
console.log(employee)