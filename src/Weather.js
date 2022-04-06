import WeatherData from "./WeatherData";

function Weather() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    return (
        <div className="weather-container">
            <h1 className="location">Kraków</h1>
            <p className="date">{month} {day}, {year}</p>
            <WeatherData temp = { 35 } wind = { 5 } humidity = {321} />




        </div>
    );
}

export default Weather;