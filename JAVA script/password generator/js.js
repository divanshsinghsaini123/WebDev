
const uppercheck = document.getElementById('uppercase');
const lowercheck = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const indicator = document.querySelector("[data-indicater]") ;
const genbutton = document.getElementById('pass-gen') ;

// ye sbko store krta hain jitne checkbox hain 
//list
const allcheckbox =document.querySelectorAll("input[type=checkbox]");
const displaypass = document.querySelector("[input-pass]") ;
const copybtn  = document.querySelector("[cpy-msg]");
const databtn  = document.querySelector("[data-msg]");

let password = "";
let lenght = 8 ;
let checkcount = 1 ;

// set color of circle grey 

// slider code 
document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('slider');
    var output = document.getElementById('Length');
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.textContent = this.value;
        lenght = this.value;
    }
});
// sliders() ;
//set indiattor

function setIndicator(color){
    indicator.style.backgroundColor =color ;
    indicator.style.boxShadow= '0 0 12px 1px ${color}' ;
}
//default color 
setIndicator("#ccc");

/// ye generate kr ke dega 
function getRanInteger( min , max){
   return  Math.floor(Math.random()*(max-min)) + min ;
}

function generateRandomNumber(){
    return getRanInteger(0,9) ;
}

function generatelowercase(){
       return String.fromCharCode(getRanInteger(97,123)) ;
}

function generateuppercase(){
    return String.fromCharCode(getRanInteger(65,90)) ;
}

// ek string bnate hain or uss me se randomly select kr lenge 
const sym = '~`!@#$%^&* ()_-+= { [}]|:;"<,>.?/' ;

function generatesymbols(){
    return sym.charAt(getRanInteger(0 , sym.length));
}

//rules for a strong week and good password

function calcstrength(){
    let hasupper = false ;
    let haslower = false ;
    let hasNUM = false ;
    let hassym = false ;
     if(uppercheck.checked) hasupper=true  ;
     if(lowercheck.checked) haslower=true ;
     if(numbers.checked) hasNUM=true ;
     if(symbols.checked) hassym=true ;
     
     if (hasupper && haslower && (hasNUM || hassym) && lenght >= 8) {
        setIndicator("#0f0");
    } else if (
        (haslower || hasupper) &&
        (hasNUM || hassym) &&
        lenght >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
     
}
//copy krne ke liye 
async function copyContent(){
    try{
        // await -> jb tk ye na ho jb tk na aage bdu 
        await navigator.clipboard.writeText(displaypass.value);
        databtn.innerText = "copied" ;

    }
    catch(e){
        databtn.innerText = "Failed" ;
    }
    // to make copy wala span visible 
    databtn.classList.add("active") ;
    setTimeout(() => {
        databtn.classList.remove("active") ;
    }, 2000);
}

function handlechecknoxchange(){
    checkcount = 0  ;
    
    allcheckbox.forEach((checkbox)=>{
        if(checkbox.checked){ checkcount++ ;}

    }) ;
    // agr checkcout jyada hain length se 
    if(lenght<checkcount){
        lenght = checkcount ;
        // sliders() ;
    }
}
// hr ek checkbox pr event listen lga diya
allcheckbox.forEach((checkbox)=>{
    // agr kisi checkbox me bhi change hua 
    // to hm ek function call krenge jo suru se sare check boxes ko check krega or pta lgayega ki ab current kitne checked hain .
    checkbox.addEventListener('change' ,handlechecknoxchange) ;
})

// jb copy ptn pr click krenge agr usme kutch pda hoga to copyContent function run ho jayega
copybtn.addEventListener('click',()=>{
    if(displaypass.value){
        copyContent();
    }
});

// when we click on "generte button " the do 
// -> onclick me function call kr do 
// or 
// -> button pr event listener lga do 
// ------------------bhim sen event listener-----

function suffle(sufflepass){
    //fisher yates method 


}
genbutton.addEventListener('click' ,()=>{
    // we can generate password only when their is some checked boxes 
    // --> agr koi bhi checkbox tik nhi hai 
    if(checkcount==0){ return ;}
    if(lenght<checkcount){
        lenght= checkcount ;
        // sliders() ; // update the slider 
    }
    // ab hm dhungenge new password 
     
    // remove the old password 
    password ="" ;

    



// we are doing the same thing by another method 
let funarr = [] ;
  if(uppercheck.checked){
    funarr.push(generateuppercase) ;
  }
  if(lowercheck.checked){
    funarr.push(generatelowercase) ;
  }
  if(symbols.checked){
    funarr.push(generatesymbols) ;
  }
  if(numbers.checked){
    funarr.push(generateRandomNumber) ;
  }
    
  // ab jo cumpulsury hain unko to must include krna hai 
  //phle unko kr lete hain 
  for(let x = 0 ; x< funarr.length ; x++){
     password+= funarr[x]();
  }

// ab random call krlo ---

  let cnt = lenght-funarr.length ;
  while(cnt--){
    let randindex =getRanInteger(0 , funarr.length-1) ;
    password += funarr[randindex]();

  }

  // but their is a problem we know about the first 4 char properties of the password 
  // so we need to suffle the password 
//   password = suffle(Array.from(password));
  // password bnke aagya 
  // ab unko display me add kro 
  displaypass.value = password ;
  // ab password ki strenght calculate krenge 
  calcstrength();

});








