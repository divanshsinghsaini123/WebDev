
// lets find the all tags in the page first 

let links = document.querySelectorAll('a') ;

// we get a list here ..

// now find the third link in the list 
let thirdlink = links[2] ;

thirdlink.addEventListener('click' , function(sec){
    sec.preventDefault() ; /*here we prevented the default action of this click  */
    // now we provide what to do when we click
    alert('mja aaya kya nhi ');
})



// now we are adding the a div to the html and adding 100 para tags inside it using for loop 
// and adding different event listeners on each of them



// ----------------------- Brute-force solution---------------------------------


// let newDiv = document.createElement('div');  /* creating a new element */ 
// newDiv.textContent = 'This is my Div' ;   /* addding text to that element*/ 
// // document.append(newDiv) ;  we can not append anything accept <html> inside the docement 
// // we have to append this inside the  body tag
// document.body.appendChild(newDiv) ;

// for(let i = 0 ; i<99 ; i++){
//     let para = document.createElement('p') ;  // new para element is created 
//     let t = i+1  ;
//     para.textContent = 'Para-> '+ t ;  // content is also added to the para 

//     para.addEventListener('click' , function(){  // adding event listener to the paragraph tag
//         console.log('you have click para -> ' + i );
//     })
//     newDiv.appendChild(para) ; 
// }

// this will take too much memory can we optimize this by mapping this to single function 





// ----------------------- Better solution---------------------------------


// let newDiv = document.createElement('div');  /* creating a new element */ 
// newDiv.textContent = 'This is my Div' ;   /* addding text to that element*/ 
// // document.append(newDiv) ;  we can not append anything accept <html> inside the docement 
// // we have to append this inside the  body tag
// document.body.appendChild(newDiv) ;


// function hellu(event){  // adding event listener to the paragraph tag
//     console.log('you have click para -> ');
// }

// for(let i = 0 ; i<99 ; i++){
//     let para = document.createElement('p') ;  // new para element is created 
//     let t = i+1  ;
//     para.textContent = 'Para-> '+ t ;  // content is also added to the para 

//     para.addEventListener('click' ,hellu)
//     newDiv.appendChild(para) ; 
// }


// ----------------------- Optimized solution---------------------------------



let newDiv = document.createElement('div');  /* creating a new element */ 
newDiv.textContent = 'This is my Div' ;   /* addding text to that element*/ 
// document.append(newDiv) ;  we can not append anything accept <html> inside the docement 
// we have to append this inside the  body tag
document.body.appendChild(newDiv) ;


function hellu(event){  // adding event listener to the paragraph tag

    console.log('you have click para -> ' + event.target.textContent);
}


newDiv.addEventListener('click' ,hellu)   //now we have added the event lister to divtag 

for(let i = 0 ; i<99 ; i++){
    let para = document.createElement('p') ;  // new para element is created 
    let t = i+1  ;
    para.textContent = 'Para-> '+ t ;  // content is also added to the para 

    newDiv.appendChild(para) ; 
}


// conclusion 
// To access the tag text on which you have clicked -> event.target.textcontent 
// To get the node name where you clicked -> event.target.nodeName ; 

