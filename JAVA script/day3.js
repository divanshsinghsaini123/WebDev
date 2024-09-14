
let x = Math.random(2, 10) 
// console.log(Math.round(x)) ;

console.log(x) ;


// string as primitive 
let first = 'divansh' ;
// string as object 

let last = new String('thsi')


// you can convert string primitive to object string 

// first . 

// ARRAYS - > 
// in primitive types we can find using 
  // 1. array.indexof(x) 
  // 2. array.includes(x)
// But in OBJECTS they not gonna work 
// -> so we have to use callback functions to solve this problem 


// CALL back function -> it is a function that passed into another function as an argument which is invocked inside the outer funciton to complete some kind of action .

// given array of objects 
let course =[
    {no:1  , subname: 'math'},
    {no:2  , subname: 'science'}
]

// now we have to use find fucntion  to find the perticular object , to find it by sub name we are using a callback function who help outer to funciton 

let obj = course.find(function (z){
    return z.subname ==='math';
})

console.log(obj) ;


// emptying an array

// here array is an object 
let num1 = [1,2,3,4,5,6] ;
let numb2 = num1 ;
num1[0] = 0 ;
num1 =[] ;
console.log(num1) ;
console.log(numb2) ;
// number.length = 0 ;
// number.splice(0 , number.length);
// loop-> number.pop ;


for (const it of numb2) {
    console.log(it)
}


console.log()
numb2.forEach(nx=>{console.log(nx)})


nums3 = [1,2,-3,4,-5] ;
let filtered = nums3.filter(function(ns){
    return ns>=0 ;
})

console.log(filtered)

// this will return the objects that are get stored into the maped array

let maped = filtered.map(function(x){
          return obj = {value : x} ;
}) 

console.log(maped) ;