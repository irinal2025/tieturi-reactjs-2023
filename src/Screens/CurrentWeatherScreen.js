//Sääsovelluksen päänäkymä
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import WeatherInfo from "../Components/weatherInfo";
import LocationInput from "../Components/LocationInput";
import { useSelector } from "react-redux";



const CurrentWeatherScreen = () => {
    const[fetchingStatus, setFetchingStatus] = useState("Loading..");

    const[weatherData, setWeatherData] = useState ({});
    const counter = useSelector( state => state.counter.value );

    useEffect(() => {
        fetchWeatherData( "Helsinki" );
    }, []);

    const updateLocation = (newLocation) => {
        fetchWeatherData(newLocation); // Haetaan säätiedot kun sijainti on päivittynyt
    }
    
    // Sääpalvelimen API:n osoite ja avain
    const urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const parameters = `&units=metric&appid=${apiKey}`;

    const fetchWeatherData = async (location) => {
        //Funktio, joka hakee (fetch) datan sääpalvelimelta
        // 1. haetaan data (await / asynkroninen)
        try {
            const response = await fetch ( urlBase + location + parameters );
            console.log( response ); //json response

            // 2. parsitaan json data (asynkroninen)
            const weatherObject = await response.json();

            // 3. päivitetään sääobjekti
            setWeatherData({
                location: weatherObject.name,
                description: weatherObject.weather[0].main,
                temperature: weatherObject.main.temp,
                wind: weatherObject.wind.speed
            });

            setFetchingStatus("fetched");
        }
        catch (error) {
            //console.log("Error fetching data");
            setFetchingStatus("Error fetching data");
        }
    }

    // condition rendering
    if (fetchingStatus === "fetched") {
        return(
            <div>
              <Header title={weatherData.location}></Header>
              <WeatherInfo weatherData={weatherData}></WeatherInfo>
              <LocationInput callback={updateLocation}></LocationInput>
              <h1>{counter}</h1>
            </div>
          );
    } 

    return(
        <div>
            <h3>{fetchingStatus}</h3>
            <LocationInput callback={updateLocation}></LocationInput>
        </div>
    );
    

}

export default CurrentWeatherScreen;