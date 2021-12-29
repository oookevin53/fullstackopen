import React from "react";
import Country from "./Country"

const Countries = ({ countries, handleClick }) => {
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countries.length > 1 && countries.length < 11) {
        return (
            countries.map((country, index) => 
                <Country 
                    key={index} 
                    country={country} 
                    handleClick={handleClick} 
                />))
    } else {
        return (
            <div>No matches found</div>
        )
    }
}

export default Countries