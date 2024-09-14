
console.log('first') ;
setTimeout(function(){
    console.log('second') ;
},5000) ;

setTimeout(function(){
    console.log('third') ;
},5000) ;

let p =new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('forth') ;
    },5000) ;
    // reject('this is now good') ;
    resolve('this is good');
})