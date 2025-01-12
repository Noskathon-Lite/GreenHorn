import { useEffect, useState } from "react";
import { useContext,createContext } from "react";

const WeatherContext = createContext();

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER_API_KEY = 'c2a31347f6a9984edbb8ea68cb3fd653';

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

function WeatherDataProvider({children}){
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null});
  const [userLocale, setUserLocale] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [weather, setWeather] = useState({});
  const [airComponents, setAirComponents] = useState({});
  const [airIndex, setAirIndex] = useState('');

  useEffect(() => navigator.geolocation.getCurrentPosition(
    position =>{
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    },
    error =>{
      throw new Error(error);
    }
  ), []);

  // console.log(userLocation);

  useEffect(() => {
    if(userLocation.latitude && userLocation.longitude){
      setIsLoading(true);
      async function fetchWeather(){
        try{
          const res = await fetch(`${WEATHER_BASE_URL}weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`);
          const data = await res.json();
          setUserLocale(data.name);
          setUserCountry(data.sys.country);
          setWeather(data.main);
          // console.log(data);
        }catch(err){
          throw new Error(err.Message);
        }finally{
          setIsLoading(false);
        }
      }  
      fetchWeather();
    }
  }, [userLocation]);

  // console.log(userLocale, userCountry, weather);

  useEffect(() => {
    if(userLocation.latitude && userLocation.longitude){
      setIsLoading(true);
      async function fetchAirPollution(){
        try{
          const res = await fetch(`${WEATHER_BASE_URL}air_pollution?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}`);
          const data = await res.json();
          // console.log(data.list[0]);
          setAirComponents(data.list[0].components);
          setAirIndex(data.list[0].main.aqi);
        }catch(err){
          throw new Error(err.Message);
        }finally{
          setIsLoading(false);
        }
      }  
      fetchAirPollution();
    }
  }, [userLocation]);

  return (
    <WeatherContext.Provider value={{
      isLoading,
      formattedDate,
      userLocale,
      userCountry,
      weather,
      airComponents,
      airIndex
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather(){
  const context = useContext(WeatherContext);
  if(context === undefined) throw new Error('Weather Context was used outside its range');
  return context;
}

export { WeatherDataProvider, useWeather};