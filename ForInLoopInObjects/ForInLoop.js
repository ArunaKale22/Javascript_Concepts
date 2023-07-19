let employee = {
    name : 'Aruna',
    technology : 'QA',
    'work expirience' : 5,
    laptop : {
        ram : 4,    
        cpu : 'i7',
        brand : 'lenevo'
    }
}
//To show all the keys including employee and laptop
for (let key in  employee){
    console.log(key, employee[key])
} 

//To show the key belongs to laptop only

for (let key in  employee.laptop){
    console.log(key, employee.laptop[key])
} 