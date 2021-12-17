import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
   }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const uniqueValues = new Set(persons.map(p => p.name))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum
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

  const Person = ({ name, number }) => <div>{name} {number}</div>

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNum} onChange={handleNumChange}></input></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) =>
        <Person key={index} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App