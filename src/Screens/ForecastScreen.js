import ForecastListItem from "../Components/ForecastListItem";
import Header from "../Components/Header";

const ForecastScreen = () => {
    
    const forecastData = [
        {time: "Mon", weather: "Sunny", temperature: 1},
        {time: "Tue", weather: "Sunny", temperature: 2},
        {time: "Wed", weather: "Sunny", temperature: 3},
        {time: "Thu", weather: "Sunny", temperature: 4},
        {time: "Fri", weather: "Sunny", temperature: 5},
        {time: "Sat", weather: "Sunny", temperature: 6},
        {time: "Sun", weather: "Sunny", temperature: 7}
    ];
    const mapForecastDataToListItem = () => {
        return forecastData.map((item)=> 
            <ForecastListItem
                time={item.time}
                weather={item.weather}
                temperature={item.temperature}
            />
        );
    }
    return(
        <div>
            <Header title="Helsinki"/>
            {mapForecastDataToListItem()}
        </div>
    );
}

export default ForecastScreen;