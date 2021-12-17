import React, { useState } from 'react'

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
  
  const Person = ({ name, number }) => <div>{name} {number}</div>
  
  const filteredNotes = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filter} onChange={handleSearch}/></div>
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNum} onChange={handleNumChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h3>Numbers</h3>
      {filteredNotes.map((person, index) =>
        <Person key={index} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App