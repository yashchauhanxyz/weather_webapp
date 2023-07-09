const apikey="b9a15f30b1ecd8b3cf604543357e8315";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wicon = document.querySelector(".icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".city").innerHTML="error";
        document.querySelector(".temp").innerHTML="-";
        document.querySelector(".humidity").innerHTML="-";
        document.querySelector(".wind").innerHTML="-";
        document.querySelector(".pressure").innerHTML="-";
    }
    var data = await response.json();
    console.log(data);

    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".pressure").innerHTML=data.main.pressure+"Pa";

    if(data.weather[0].main=="Clouds"){
        wicon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wicon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        wicon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        wicon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        wicon.src="images/mist.png";
    }
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})