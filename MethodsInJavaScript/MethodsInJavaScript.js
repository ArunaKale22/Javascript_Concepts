let laptop = {
    ram : 4,
    brand : 'HP',
    cpu : 'i9',

    greet : function ()
     {
        console.log("Hello World") 
    }
}

//greet();
// It wont work as only greet is not defined, it is actually
// defined in the object that is laptop

laptop.greet();
//Here if you want call the method/ function which is inside the 
//object(say laptop), then we have to give object name(say laptop.greet)