import React, { useState, useEffect } from 'react'
import SearchBar from "./components/SearchBar"
import Countries from "./components/Countries"
import CountryDetail from './components/CountryDetail'

import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const handleSearch = (event) => {
    setSelected('')
    setSearch(event.target.value)
  }

  const handleClick = (country) => () => {
    setSelected(country)
  }
  

  return (
    <>
    <SearchBar search={search} handleSearch={handleSearch} />
    {search
      ? <Countries countries={filteredCountries} handleClick={handleClick} />
      : <></>
    }
    {selected
      ? <CountryDetail country={selected} />
      : <></>
    }
    </>
  )
}

export default App;
