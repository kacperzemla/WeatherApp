import { useState, useEffect } from "react";
import useFetch from "./useFetch";

import WeatherData from "./WeatherData";

function Weather() {
  const [dayFilter, setDayFilter] = useState("");
  const [selectedDay, setSelectedDay] = useState([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const today = date.toISOString().split("T")[0];
  const tomorrow = addDays(date, 1);

  useEffect(() => {
    setDayFilter(today);
  }, []);

  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/raspberry"
  );

  const {
    data: dataML,
    isPending: isPendingML,
    error: errorML,
  } = useFetch("http://127.0.0.1:8000/api/model");

  useEffect(() => {
    if (dataML !== null) {
      let data =
        dayFilter === today
          ? dataML.filter((element) => element.date === today)
          : dataML.filter((element) => element.date === tomorrow);
      setSelectedDay(data);
    }
  }, [dayFilter, dataML]);

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split("T")[0];
  }

  return (
    <div className="weather-container">
      <h1 className="location">Kraków</h1>
      <p className="date">
        {month} {day}, {year}
      </p>
      {data && (
        <WeatherData
          temp={data[0].temperature}
          wind={""}
          humidity={data[0].humidity}
          rain={""}
        />
      )}
      <h1 className="modelTitle">Machine learning model</h1>

      <div className="daySelect">
        <button
          className="emailForm-button"
          onClick={() => setDayFilter(today)}
        >
          today
        </button>
        <button
          className="emailForm-button"
          onClick={() => setDayFilter(tomorrow)}
        >
          tomorrow
        </button>
      </div>

      <h2>{dayFilter}</h2>
      {dataML &&
        selectedDay.length !== 0 &&
        selectedDay.map((data, index) => {
          return (
            <div key={index} className="model-container">

              <div className="weather-data-item">
                <p className="weather-data-name">Hour</p>
                <p className="weather-data-value">{data.hour}:00</p>
              </div>
              <div className="weather-data-item">
                <p className="weather-data-name">Temp.</p>
                <p className="weather-data-value">{data.temp} &#8451;</p>
              </div>
              <div className="weather-data-item">
                <p className="weather-data-name">Humidity</p>
                <p className="weather-data-value">{data.humidity} %</p>
              </div>
              <div className="weather-data-item">
                <p className="weather-data-name">Conditions</p>
                <p className="weather-data-value">{data.conditions}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Weather;
