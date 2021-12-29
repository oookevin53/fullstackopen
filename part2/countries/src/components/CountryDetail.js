import React from "react";

const degToCompass = (num) => {
    const val = parseInt((num/22.5)+.5)
    const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return arr[(val % 16)]
}

const CountryDetail = ({ country, weather }) => {
    if (weather) {
        return (
            <>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h3>Spoken languages</h3>
            <ul>
            {Object.entries(country.languages).map(([ key, language ]) => <li key={key}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt='flag' width="100" height="100" />
            <h3>Weather in {country.capital}</h3>
            <div><strong>temperature: </strong>{Math.round(weather.main.temp)} Fahrenheit</div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_icon" />
            <div><strong>wind: </strong>{Math.round(weather.wind.speed)} mph direction {degToCompass(weather.wind.deg)}</div>
            </>
        )
    } else {
        return "Weather loading"
    }
}

export default CountryDetail