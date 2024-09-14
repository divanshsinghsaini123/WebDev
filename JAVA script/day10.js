console.log("hello") ;


// async function final(){
//     let content =  await fetch("https://api.restful-api.dev/objects/4") ;
//     let output = await content.json() ;
//     console.log(output);
// }
// final() ;
 
function outer(){
    let a = 1 ; 
    console.log(a);
    function inner1(){
        let a = 2 ;
        console.log(a) ;
        function inner2(){
            let a = 3 ;
            console.log(a) ;
        }
        inner2();
       
    }
    inner1();
}

outer() ;


