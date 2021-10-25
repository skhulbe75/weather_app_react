import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '3e9b1e916bdd92c299d6ea4a65b80c02';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL, {
        params:{
            q: query,
            units: 'metrics',
            APPID: API_KEY
        }
    });
   return data;
}