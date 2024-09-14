
let a = 10;
let b = a; /* we are passing primitive here so passsed by value */
 console.log(a++)
 console.log(b)
 console.log(a)



 function inc(x){
    x.value++;
 }
let c = {value: 10}
let d = c ;
inc(c) ;
console.log(c.value) ;
console.log(d.value) ;
inc(d) ;
console.log(c.value) ;


// here you can see when we object / references -> these are passed by addresss . 
//and when we pass primitives only values are copied 

function increse(a) 
{
   a++ ;
   console.log(a) ;
}
 console.log('passed by value')
let z = 10 ;
console.log(z)
increse(z) ;
console.log(z)
 // in above you can see that passing a primitive causes only value is get coppied .. no address 
 
