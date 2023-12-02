import React, { useEffect, useState } from 'react'
import './WeatherApp.css'
import axios, { Axios } from "axios";

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp1 = () => {
    const [element,setElement]=useState("london");

    const [wicon,setWicon]=useState(cloud_icon);

    const [wdata,setWdata]=useState({
        humidity:"",
        wind:"",
        temp:"",
        location:""
    })

    let api_key="44929628ee512c2544216fd29e53ecb9";

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`;
    const search=()=>{
        axios.get(url).then((data)=>
        {
            console.log(data.data)
            setWdata({
                humidity:data.data.main.humidity,
                wind:data.data.wind.speed,
                temp:data.data.main.temp,
                location:data.data.name
            })
            if(data.data.weather[0].icon==="01d" || data.data.weather[0].icon==="01n")
            {
              setWicon(clear_icon)
            } 
            else if(data.data.weather[0].icon==="02d" || data.data.weather[0].icon==="02n")
            {
              setWicon(cloud_icon)
            }
            else if(data.data.weather[0].icon==="03d" || data.data.weather[0].icon==="03n")
            {
              setWicon(drizzle_icon)
            }
            else if(data.data.weather[0].icon==="04d" || data.data.weather[0].icon==="04n")
            {
              setWicon(drizzle_icon)
            }
            else if(data.data.weather[0].icon==="09d" || data.data.weather[0].icon==="09n")
            {
              setWicon(rain_icon)
            }
            else if(data.data.weather[0].icon==="010d" || data.data.weather[0].icon==="010n")
            {
              setWicon(rain_icon)
            }
            else if(data.data.weather[0].icon==="013d" || data.data.weather[0].icon==="013n")
            {
              setWicon(snow_icon)
            }
            
            else{
              setWicon(clear_icon)
            }
        }).catch(err=>
            {
                alert("Enter The Valid Location")
            })
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
            {wdata.temp} c
        </div>
        <div className='weather-location'>
            {wdata.location}
        </div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt=''  className='icon'></img>
                <div className='data'>
                    <div className='humidity-percent'>
                        {wdata.humidity} %
                    </div>
                    <div className='text'>
                          Humidity
                    </div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon'></img>
                <div className='data'>
                    <div className='wind-rate'>
                       {wdata.wind} km/h
                    </div>
                    <div className='text'>
                          Wind Speed
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp1