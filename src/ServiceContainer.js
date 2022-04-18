import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import WeatherData from "./WeatherData";

const active = { backgroundColor: '#948bb0' };
const inactive = {};

function ServiceContainer({ service, region, hour }) {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/" + service + `/${region}`
  );

  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [rain, setRain] = useState(0);
  const [day1, setDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [day3, setDay3] = useState([]);
  const [selected, setSelected] = useState(1);
  const [actualDay, setActualDay] = useState([]);

  let today = new Date();
  let dayFirst = today.toISOString().split("T")[0];
  let daySecond = addDays(today, 1);
  let dayThird = addDays(today, 2);



  useEffect(() => {
    if (data) {
      setDay1(data.filter((object) => object.weather_time === dayFirst));
      setDay2(data.filter((object) => object.weather_time === daySecond));
      setDay3(data.filter((object) => object.weather_time === dayThird));
    }
  }, [data]);

  useEffect(() => {
    if (day1.length !== 0) {
      setTemp(getTemp(day1));
      setWind(getWind(day1));
      setHumidity(getHumidity(day1));
      setRain(getRain(day1));
      setActualDay(day1);
    }
  }, [day1]);

  useEffect(() => {
    if (actualDay.length !== 0) {
      console.log(actualDay)
    setTemp(getTemp(actualDay));
    setWind(getWind(actualDay));
    setHumidity(getHumidity(actualDay));
    setRain(getRain(actualDay));
    }
  }, [hour])
  
  

  function getTemp(day) {
    let [hourTemp] = day.filter((object) => object.hour === parseInt(hour));
    return hourTemp.temperature;
  }

  function getWind(day) {
    let [hourTemp] = day.filter((object) => object.hour === parseInt(hour));
    return hourTemp.wind;
  }

  function getRain(day) {
    let [hourTemp] = day.filter((object) => object.hour === parseInt(hour));
    return hourTemp.rain;
  }

  function getHumidity(day) {
    let [hourTemp] = day.filter((object) => object.hour === parseInt(hour));
    return hourTemp.humidity;
  }

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split("T")[0];
  }

  function handleClick(day) {
    setTemp(getTemp(day));
    setWind(getWind(day));
    setHumidity(getHumidity(day));
    setRain(getRain(day));
    setActualDay(day);
  }

  function changeSelected(dayNum) {
    setSelected(dayNum);
  }



  //https://slider-react-component.vercel.app/
  // serwis/dzien -> 8/12/16/20/24
  return (
    <div className="service-container">
      {data && (
        <div>
          {" "}
          <div className="media-container">
            <div className="service-logo">Interia</div>
            <div className="service-weather__icon">icon</div>
          </div>
          <WeatherData
            temp={temp}
            wind={wind}
            humidity={humidity}
            rain={rain}
          />
          <div className="days-container">
            <div
              className="next-day"
              onClick={() => {
                handleClick(day1);
                setSelected(1);
              }}
              style={selected === 1 ? active : inactive}
            >
              <div className="next-day-icon"></div>
              <p className="next-day-name">Mon.</p>
            </div>
            <div
              className="next-day"
              onClick={() => {
                handleClick(day2);
                setSelected(2);
              }}
              style={selected === 2 ? active : inactive}
            >
              <div className="next-day-icon"></div>
              <p className="next-day-name">Tue.</p>
            </div>
            <div
              className="next-day"
              onClick={() => {
                handleClick(day3);
                setSelected(3);
              }}
              style={selected === 3 ? active : inactive}
            >
              <div className="next-day-icon"></div>
              <p className="next-day-name">xdd</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceContainer;
