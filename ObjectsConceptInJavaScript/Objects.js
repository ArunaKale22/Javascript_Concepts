let employee = {
    name: 'Aruna',
    designation: 'QA',
    'work exp': 5
};//Its an object in JavaScript.

//To call a key value of an object then we can use .(dot) operator. This concept is easy even if we are working with objects inside the object.
console.log(employee.name);

//Another way to call a key of an object i.e
console.log(employee['work exp']) 
//The main purpose is to use this kind of concept is suppose if we have the 
//property name of two words (just like work exp) and then if we need to 
//fetch the key value of that property then we have to follow the above 
//console.log. In such case we cannot use .(dot) operator to fetch the 
//key value of the property.

// Using template litrel.
console.log(`${employee.designation}`);
console.log(`${employee['work exp']}`);