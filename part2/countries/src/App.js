import React, { useState, useEffect } from 'react'
import SearchBar from "./components/SearchBar"
import Countries from "./components/Countries"
import CountryDetail from "./components/CountryDetail"

import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}&units=imperial`)
          .then(response => {
              setWeather(response.data);
          })
    }
}, [search])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = (country) => () => {
    setSearch(country.name.common)
  }

  return (
    <>
    <SearchBar search={search} handleSearch={handleSearch} />
    {(filteredCountries.length !== 1)
      ? <Countries countries={filteredCountries} handleClick={handleClick} />
      : <CountryDetail country={filteredCountries[0]} weather={weather}/>
    }
    </>
  )
}

export default App;
