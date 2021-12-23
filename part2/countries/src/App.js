import React, { useState, useEffect } from 'react'
import SearchBar from "./components/SearchBar"
import Countries from "./components/Countries"

import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
    <SearchBar search={search} handleSearch={handleSearch} />
    {search
      ? <Countries countries={filteredCountries} />
      : <></>
    }
    </>
  )
}

export default App;
