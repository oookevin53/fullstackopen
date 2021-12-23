import React from "react";
import Country from "./Country"
import CountryDetail from "./CountryDetail"

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return (
        <div>Too many matches, specify another filter</div>
        )
    } else if (countries.length > 1 && countries.length < 11) {
        return (
        countries.map((country, index) => 
        <Country key={index} country={country}/>
        ))
    } else if (countries.length === 1) {
        return (
        <CountryDetail country={countries[0]} />
        )
    } else {
        return (
        <div>No matches found</div>
        )
    }
}

export default Countries