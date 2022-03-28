function WeatherData (){
    return (
        <div className="weather-data">
        <div className="weather-data-item">
            <p className="weather-data-name">Temp.</p>
            <p className="weather-data-value">35 &#8451;</p>
        </div>
        <div className="weather-data-item">
            <p className="weather-data-name">Wind</p>
            <p className="weather-data-value">10km/h</p>
        </div>
        <div className="weather-data-item">
            <p className="weather-data-name">Humidity</p>
            <p className="weather-data-value">75%</p>
        </div>
    </div>
    );
}

export default WeatherData;