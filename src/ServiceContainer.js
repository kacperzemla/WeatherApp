import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import WeatherData from "./WeatherData";

function ServiceContainer({ service }) {

  const { data, isPending, error } = useFetch(
    "http://localhost:8000/" + service
  );

  console.log(data)

  const [temp, setTemp ] = useState(0);
  const [wind, setWind ] = useState(0);
  const [humidity, setHumidity ] = useState(0);
  
  useEffect(() => {
    if(data){
      setTemp(data[1].eightHour.temp);
      setWind(data[1].eightHour.wind);
      setHumidity(data[1].eightHour.humidity);
    }
  },[data])



  function handleClick(i){
    setTemp(data[i].eightHour.temp);
    setWind(data[i].eightHour.wind);
    setHumidity(data[i].eightHour.humidity);
  };


  // serwis/dzien -> 8/12/16/20/24
  return (
    <div className="service-container">
      {data && (
        <div>
          {" "}
          <div className="media-container">
            <div className="service-logo">{data[0].serviceName}</div>
            <div className="service-weather__icon">icon</div>
          </div>
          <WeatherData temp = { temp } wind = { wind } humidity = { humidity }/>
          <div className="days-container">
            <div className="next-day" onClick={() => handleClick(1)}>
              <div className="next-day-icon"></div>
              <p className="next-day-name">Mon.</p>
            </div>
            <div className="next-day" onClick={() => handleClick(2)}>
              <div className="next-day-icon"></div>
              <p className="next-day-name">Tue.</p>
            </div>
            <div className="next-day" onClick={() => handleClick(3)}>
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
