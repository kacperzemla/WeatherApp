import { useState } from "react";
import useFetch from "./useFetch";

import WeatherData from "./WeatherData";

function ServiceContainer() {
    const [temp, setTemp ] = useState(0);
    const [wind, setWind] = useState(10);
    const [humidity, setHumidity] = useState(5);
// serwis/dzien -> 8/12/16/20/24
    return (
        <div className="service-container">
            <div className="media-container">
                <div className="service-logo">onet.pl</div>
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
    );
}

export default ServiceContainer;