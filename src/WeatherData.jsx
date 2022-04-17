function WeatherData ({temp, wind, humidity, rain}){
    return (
        <div className="weather-data">
        <div className="weather-data-item">
            <p className="weather-data-name">Temp.</p>
            <p className="weather-data-value">{ temp } &#8451;</p>
        </div>
        <div className="weather-data-item">
            <p className="weather-data-name">Wind</p>
            <p className="weather-data-value">{ wind }km/h</p>
        </div>
        <div className="weather-data-item">
            <p className="weather-data-name">Humidity</p>
            <p className="weather-data-value">{ humidity }%</p>
        </div>
        <div className="weather-data-item">
            <p className="weather-data-name">Rain</p>
            <p className="weather-data-value">{ rain }mm</p>
        </div>
    </div>
    );
}

export default WeatherData;