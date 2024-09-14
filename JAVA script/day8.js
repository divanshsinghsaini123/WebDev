//  code 1
// let t1 = performance.now() ;
// let x = document.createDocumentFragment() ;

// for(let i = 0 ; i< 1000 ; i++){
//     let para = document.createElement('p') ;
//     para.textContent = 'this is para->' + i ;
//     x.appendChild(para) ;
// }
// document.body.appendChild(x) ;
// let t2 = performance.now() ;
// console.log('Time taken by first code -> ' + t2-t1) ;


// // code 2

// let t3 = performance.now() ;

// for(let i = 0 ; i< 1000; i++){
//     let para = document.createElement('p') ;
//     para.textContent = 'this is para->' + i ;
//     document.body.appendChild(para) ;
// }

// let t4 = performance.now() ;
// console.log('Time taken by second code -> ' + t4-t3) 

setTimeout(
    function(){
        console.log('0 second wala funciton')
    } , 0 
)


console.log('hi');

setTimeout(
    function(){
        console.log('5 second wala funciton')
    } , 5000 
)


console.log('helo');


setTimeout(
    function(){
        console.log('1 second wala funciton')
    } , 1000 
)

console.log('the end ') ;