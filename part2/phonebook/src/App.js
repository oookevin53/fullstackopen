import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(()=> {
    personService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      number: newNum
    }
    
    if (uniqueValues.has(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(personObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setNewName('')
          setNewNum('')
      })
    }
  }
  
  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  const uniqueValues = new Set(persons.map(p => p.name))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleSearch = (event) => {
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm 
        name={newName} 
        number={newNum}
        handleName={handleNameChange}
        handleNum={handleNumChange}
        submitForm={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPeople} />
    </div>
  )
}

export default App