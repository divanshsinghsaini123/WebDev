

function increase(x){
    return x.value++ ; 
}


let x = {value: 5} ;
console.log(x) 
increase(x) 
console.log(x) 


function add(a , b){
    return a+b 
}

let a = 'a'
let b = 5 
let c = a+b ;
console.log(add(a,b)) ;
console.log(typeof c)

// all the variables that you have passed to a function are stored inside a argument variable(storage space for that function )

// argument is a local variable defined inside eaach fucniton 

function addition( a, b){
   console.log(arguments)   /*argument is an object  */ 
    return a+b ;
}

addition(1, 2, 3, 4, 5 )
// if you passed extra variabes they get stored inside the argument 


//                        QUESTION                

// -> if you have given many numbers that are more then your defined arguments for that function
//      then can you please add all the values 

function add_all(a,b){
    console.log(arguments) 
    let sum = 0; 
     for (const key of arguments) {
        sum =sum + key 
     }
    return sum  ;
}

function all_none(...arg){
    console.log(arg)
    let total = 0
    for (const it of arg) {
         total = total +  arg
    }

    return total 
}

console.log(add_all(1,2,3,4,5,6,7)) 

console.log(all_none(1,2,3,4,5,6,7)) 


// default parameters 
function defau( x, y=2, z=6){

return (x*y*z)


}
console.log(defau(1,undefined , 3 ))

// NOW pending topic of objects -> getter , setter 
// lets create a object 
let person={
    // properties 
    fname : 'rahul ' , 
    lname : 'saini ' ,
    // lets try to get ad set the values of this object outside the person obhect 
    get fullname(){
            // return `$[fname]   $[lname]` 
            console.log(this.fname + ' ' + this.lname) 
    },
    set fullname(value){
        // spliting the string into a array based upon the space present in the string 
        let list = value.split(' ')
        this.fname = list[0] 
        this.lname = list[1] 

    }

}

function getter(){
     console.log(person.fname + ' ' +person.lname)
}
// we can see that we can easily get the value of an object
// console.log(person)

// can we set the value of that object -> means can we change the values of that object from outside the object 
function setter(value){
    let list = value.split(' ')   /* we are spliting this value(string) on bases of space between the variables */
    //  we know that the split funciton return a array so we can eaily access that array by their index
    person.fname= list[0] ,
    person.lname= list[1] 

}

setter('divansh saini')


console.log(person)
// we can easily do this job form outside , but this is not a good practice 



person.fullname = 'koshal chauchan ' 
person.fullname 


const xc =  5 ;
{
    const xc = 6
    console.log(xc)
}


console.log(xc)



// sorting a array that containg the objects 

// 1st create a array of objects 
let arr = [
    {name:'divansh' , roll: 7},
    {name:'this' , roll: 6},
    {name:'is' , roll: 4},
    {name:'a' , roll: 5},
    {name:'man' , roll: 3},
    {name:'form' , roll: 2},
    {name:'mp' , roll: 1}
]
// here we created 7 objects inside a array 
arr.sort(function(s , r){
    return s.roll - r.roll  
})

console.log(arr) 
