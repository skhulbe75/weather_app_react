import React, {useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi'

import {fetchWeather} from '../API/fetchWeather';
import './Weather.css';

const Weather = () =>{

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter' || e.onClick){
            const data = await fetchWeather(query)

            setWeather(data)
            setQuery('')
        }
    }

    const search1 = async (e) => {
        
            const data = await fetchWeather(query)

            setWeather(data)
            setQuery('')
        
    }

    return(
        <div className='main-container'>
            
            <div className="search">
                <input 
                    type = "text"
                    className= "search-input"
                    placeholder = "Enter your City"
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    onKeyPress = {search}
                />
                <button className="search-btn" onClick={search1}>
                    <BiSearchAlt />
                </button>
            </div> 
            
            
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp) - 273}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Weather;