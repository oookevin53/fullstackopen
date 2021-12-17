import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  
  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  const uniqueValues = new Set(persons.map(p => p.name))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }

    if (uniqueValues.has(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
    }
  }

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
        num={newNum}
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