let name =  'Aruna';
let age=25;

let s1 = 'Hello world';
let num= 30;
let salary = 12.96;
let flag = false ;
let isActive = true;
let price;
let model = null;
let wheels = undefined;

// document.write(name + ' ' + age);
console.clear();
console.log(name + ' ' + age);
console.log(age);

//Objects creation

let user = {
    userName: "Tommy",
    userAge: 45
};

console.log(user);

//1. Dot Notation
console.log(user.userName);
console.log(user.userAge);

user.userName = "Jerry"
user.userAge = 50;
console.log(user.userName + ' ' + user.userAge);

//2. Bracket Notation

user['userName'] = 'Santa';
user['userAge'] = 62;

console.log(user.userName + ' ' + user.userAge);

//Arrays:
//List of objects:

let language = ['Java', 'Javascript', 'Reactnative', 'Python', 'Php'];
console.log(language);
console.log(language.length);

//Adding an array element into the arraylist
language[5] = 'Ruby';
console.log(language);

//Updating an array element in the arraylist
language[4] = 'C#';
console.log(language);
console.log(language.length);

//Checking the position of the array element
console.log(language[2]);
console.log(language[10]);

// To know the data type of the array (Language)
console.log(typeof language);

//Functions

//0 Parameter function
function getName (){
    console.log('This is a function');
}
//Calling the function 

getName();

// Parameter based function

function greet(myName, myAge){
    console.log('Hello' + ' ' + myName + ' ' + myAge );
}

greet('Aruna', 28);
greet('Aruna');
greet();

//Returning from function

function add (num1, num2){
    return num1 + num2;
}

let sum= add(10, 20);
console.log(sum);

console.log(add(60,67));

// Returning from function, other way

function addition(number1, number2){
    let sum1 = number1 + number2;
    return sum1;
}

console.log(addition(130, 874));





