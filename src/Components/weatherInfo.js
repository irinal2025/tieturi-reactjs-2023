const WeatherInfo = ({weatherData}) => {
    return(
        <div>
            <p>{weatherData.description}</p>
            <p>{weatherData.temperature} °C</p>
            <p>{weatherData.wind} m/s</p>
        </div>
    );
}

export default WeatherInfo;