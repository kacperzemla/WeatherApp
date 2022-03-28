import WeatherData from "./WeatherData";

function ServiceContainer() {

    return (
        <div className="service-container">
            <div className="media-container">
                <div className="service-logo">onet.pl</div>
                <div className="service-weather__icon">icon</div>
            </div>
        <WeatherData />
        </div>
    );
}

export default ServiceContainer;