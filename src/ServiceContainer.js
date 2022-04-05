import { useState } from "react";
import useFetch from "./useFetch";

import WeatherData from "./WeatherData";

function ServiceContainer({ service }) {
  console.log(service);
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/" + service
  );

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
          <WeatherData />
          <div className="days-container">
            <div className="next-day">
              <div className="next-day-icon"></div>
              <p className="next-day-name">Mon.</p>
            </div>
            <div className="next-day">
              <div className="next-day-icon"></div>
              <p className="next-day-name">Tue.</p>
            </div>
            <div className="next-day">
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
