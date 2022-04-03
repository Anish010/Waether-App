import React, { useState, useEffect } from "react";
import WeatherCard from "./weatherCard"
import "./style.css"
const Temp = () => {
    const [searchValue, setSearchvalue] = useState("Howrah");

    const [tempInfo, setTempInfo] = useState("");
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3e462adb662675d2a08cd18a68f05d8e`;

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name, timezone } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                timezone,
                speed,
                country,
                sunset


            };

            setTempInfo(myWeatherInfo);
     
        } catch (error) {
            console.log(error);
        }
        
    };
    
    useEffect(() => {
        getWeatherInfo();
    }, []);
    
  return (
      <>
          <div className="wrap">
              <div className="search">
                  <input type="search" placeholder="search" autofocus id="search" className="searchTerm" value={searchValue} onChange={(e)=>setSearchvalue(e.target.value)}  />
                  <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
              </div>
          </div>

          {/*Widget*/}
          <WeatherCard tempInfo={tempInfo}/>
      </>
  )
}

export default Temp