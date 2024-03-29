import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [color, setColor] = useState("")
  
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
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (confirm) {
        const person = persons.find(n => n.name === newName)
        const changedPerson = { ...person, number: newNum }
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
            setMessage(`Updated contact for ${newName}`)
            setColor("green")
          })
          .catch(error => {
            setMessage(`Information of "${newName}" has already been removed from server`)
            setColor("red")
          })
        }
    } else {
      personService
        .create(personObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setMessage(`Added contact for ${newName}`)
          setColor("green")
        })
    }
    setTimeout(() => {
      setMessage(null)
      setColor("")
    }, 5000)
    setNewName('')
    setNewNum('')
  }
  
  const handleDelete = (id) => () => {
    const person = persons.find(n => n.id === id)
    const confirm = window.confirm(`Delete ${person.name} ?`)
    if (confirm) {
      personService
      .remove(id)
      .then(
        () => {
          setPersons(persons.filter(p => p.id !== id))
          setMessage(`Deleted ${person.name}`)
          setColor("green")
          setTimeout(() => {
            setMessage(null)
            setColor("")
          }, 5000)
        }
      )
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
      <Notification message={message} color={color}/>
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
      <Persons persons={filteredPeople} handleDelete={handleDelete} />
    </div>
  )
}

export default App