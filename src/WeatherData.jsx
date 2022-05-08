function WeatherData({ temp, wind, humidity, rain }) {
  return (
    <div className="weather-data">
      {temp !== "no data" ? (
        <>
          <div className="weather-data-item">
            <p className="weather-data-name">Temp.</p>
            <p className="weather-data-value">{temp} &#8451;</p>
          </div>
          {wind !== '' && (
            <div className="weather-data-item">
              <p className="weather-data-name">Wind</p>
              <p className="weather-data-value">{wind}km/h</p>
            </div>
          )}
          <div className="weather-data-item">
            <p className="weather-data-name">Humidity</p>
            <p className="weather-data-value">{humidity}%</p>
          </div>
          {rain !== '' && (
            <div className="weather-data-item">
              <p className="weather-data-name">Rain</p>
              <p className="weather-data-value">{rain}mm</p>
            </div>
          )}
        </>
      ) : (
        <p className="nodata-error">No data</p>
      )}
    </div>
  );
}

export default WeatherData;
