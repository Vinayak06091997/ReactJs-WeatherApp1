import React, { useState } from 'react'
import './WeatherApp.css'

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp = () => {
  const [element,setElement]=useState("");

  const [wicon,setWicon]=useState(cloud_icon);


  let api_key="44929628ee512c2544216fd29e53ecb9";

  const search=async()=>{
    // const element=document.getElementsByClassName("cityInput");
    console.log(element)
    if(element[0].value==="")
    {
      return 0;
    }
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`;
      
      let response=await  fetch(url);
      let data= await response.json();
      console.log(data)
      const humidity=document.getElementsByClassName("humidity-percent");
      const wind=document.getElementsByClassName("wind-rate");
      const temp=document.getElementsByClassName("weather-temp");
      const location=document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=data.main.humidity+" %";
      wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
      temp[0].innerHTML=Math.floor(data.main.temp) +" c";
      location[0].innerHTML=data.name;


      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
      {
        setWicon(clear_icon)
      } 
      else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      {
        setWicon(cloud_icon)
      }
      else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      {
        setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
      {
        setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      {
        setWicon(rain_icon)
      }
      else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n")
      {
        setWicon(rain_icon)
      }
      else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n")
      {
        setWicon(snow_icon)
      }
      
      else{
        setWicon(clear_icon)
      }
      
    }
  return (
    <div className='container'>
      
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='search' onChange={(e)=>setElement(e.target.value)}/>
                <div className='search_icon' onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
        </div>
        <div className='weather-img'>
          <img src={wicon} alt='' />
        </div>
        <div className='weather-temp'>
            24
        </div>
        <div className='weather-location'>
            london
        </div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt=''  className='icon'></img>
                <div className='data'>
                    <div className='humidity-percent'>
                        64%
                    </div>
                    <div className='text'>
                          humidity
                    </div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon'></img>
                <div className='data'>
                    <div className='wind-rate'>
                       18km /h
                    </div>
                    <div className='text'>
                          wind speed
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp