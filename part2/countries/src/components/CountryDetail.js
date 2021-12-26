import React from "react";

const CountryDetail = ({ country }) => {
    return (
        <>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <ul>
        {Object.entries(country.languages).map(([ key, language ]) => <li key={key}>{language}</li>)}
        </ul>
        <img src={country.flags.png} alt='flag' width="100" height="100" />
        </>
    )
}

export default CountryDetail