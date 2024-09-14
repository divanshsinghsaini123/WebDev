//tabs me switch krna hai 
//using active class
const userTab = document.querySelector("[user-weather]") ;
const searchTab = document.querySelector("[s-weather]") ;

const firstone  = document.getElementsByClassName("weather-container");
const secondone = document.getElementsByClassName("form-container") ;
const grantacess = document.getElementsByClassName("grant_location") ;
const loadingscreen = document.getElementsByClassName("loading-contianer") ;

const userinfocontainer = document.getElementsByClassName("user-info-container") ;

// initiall varianbe 
let old_tab = userTab ;
const API_KEY = "168771779c71f3d64106d8a88376808a";
old_tab.classList.add("old-tab");

// one work is pending 
getfromSessionStorage();
// ek function jo in dono tabs me switch kre 

// this function will switch the tab and shift the color among gtabs
function switchtab(new_tab){ 
    if(old_tab!=new_tab){
     old_tab.classList.remove("old-tab");
     old_tab = new_tab ;
     old_tab.classList.add("old-tab");
      if(!secondone.classList.contains("active")){
        userinfocontainer.classList.remove("active") ;
        grantacess.classList.remove("active");
        secondone.classList.add("active") ;
      }
      else{
         secondone.classList.remove("active") ;
         userinfocontainer.classList.remove("active");
         // ab mai your weather tab me aa gya hun to weather 
         // bhi display krna pdega 
         // lets check loacal storage for coordinates 
          getfromSessionStorage();
      }
    }
}
userTab.addEventListener("click" ,()=>{
     switchtab(userTab);
});

searchTab.addEventListener("click" ,()=>{
    switchtab(searchTab);
});

//check if coordinates are already present in session storage 
function getfromSessionStorage(){
   const loacalcordinates = sessionStorage.getItem("user-coordinates") ;
   if(!loacalcordinates){
        // agr coordinates nhi diye to hme 
        // grant wali window show krni pdegi 
        // grantacess.classList.add("active");
   }
   else{
       const coordinates =JSON.parse(loacalcordinates);
       fetchUserWeatherInfo(coordinates);
   }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat , lon} = coordinates ;
    // make grant access container invisible 
    grantacess.classList.remove("active") ;
    loadingscreen.classList.add("active") ;
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json; 
        loadingscreen.classList.remove.add("active");
        userinfocontainer.classList.add("active");
         renderweatherinfo(data);
         // jo data aaya hai usme se values nikal ke 
         // put in krega display per

    }
    catch(err){
        loadingscreen.classList.remove("active");  
    }

}

function renderweatherinfo(data){
    // firsttly we have to fatch the elements
    const cityname = document.querySelector("[data-cityname]") ;
    const countryicon = document.querySelector("[cntry-img]") ;
    const weatherIcon = document.querySelector("[data-w-icon]") ;
    const desc  = document.querySelector("[data-weather-desc]") ;
    const temp  = document.querySelector("[data-temp]") ;
    const windsp  = document.querySelector("[data-windspeed]") ;
    const humidity  = document.querySelector("[data-humidity]") ;
    const cloudy  = document.querySelector("[data-cloudy]") ;
    // hmne sare elements fatch kr liye 
    // to access json we use optinal channing operator 
    cityname.innerText = data?.name ;
    countryicon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.innerText =data?.weather?.[0].description ;
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText = data?.main?.temp ;
    windsp.innerText = data?.main?.speed ;
    humidity.innerText = data?.main?.humidity ;
    cloudy.innerText = data?.clouds?.all ;
     
}

const grantbtn = document.querySelector("[data-grantAcess]") ;

function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // show an alert 
    }
}
function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude, 
        lon: position.coords.longitude, 
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
} 
grantbtn.addEventListener("click" , getlocation);

// now what happend if i clicked on the search button 
  
const inputField = document.querySelector("[data-s-input]") ;
 const searchForm = document.querySelector("[seachFrom]") ;
 searchForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    let cityName = inputField.value ;
    if(cityName==""){
        return ;
    }
    else{
        fetchUserWeatherInfo(cityName) ;
    }
} )

async function fetchSearchWeatherInfo(city){
     loadingscreen.classList.add("active");
     userinfocontainer.classList.remove("active") ;
     grantacess.classList.remove("active");
     try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json() ;
        loadingscreen.classList.remove("active") ;
        userinfocontainer.classList.add("active") ;
        renderweatherinfo(data) ;
     }
     catch(arr){

     }
}