// let laptop =
// {
//     cpu : 'i9',
//     ram : 4,
//     brand : 'HP',

//     getConfig : function ()
//         {
//               console.log(cpu)
//         }
// }

// laptop.getConfig()
//In the above code it will show an error as "cpu is not defined", to 
//run it correctly, check the following code

// let laptop ={
//     cpu : 'i9',
//     ram : 4,
//     brand : 'HP',

//     getConfig : function ()
//      {
//         console.log(laptop.cpu)  
//      }
// } 

// laptop.getConfig()

//Lets say we have multiple objects

let laptop1 ={
    cpu : 8,
    ram :'i9',
    brand : 'HP',
    getConfig: function () {
       console.log(this.cpu) 
    }
}

let laptop2 ={
    cpu : 4,
    ram :'i9',
    brand : 'HP',
    getConfig: function () {
       console.log(this.cpu) 
    }
}

laptop2.getConfig()