import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Persons from './components/Persons'
import FilterForm from './components/FilterForm'
import NewPersonForm from './components/NewPersonForm'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
    setPersons(initialPersons)
  })
}, [])
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    let found = false
    persons.forEach(function(item, index, array) {
    if (item.name === newName) {
      found = true
      }
    })

    if(found) {
      window.alert(`${newName} on jo luettelossa`)
        setNewName('')
        setNewNum('')
    } else {
      const personObject = {
        name: newName,
        number: newNum
      }
      personService
      .create(personObject)
        .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
      })
      setNewName('')
      setNewNum('')
    }
  
}

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <FilterForm handleFilterChange={handleFilterChange}/>
      <NewPersonForm addPerson={addPerson}
       handleNameChange={handleNameChange} 
       handleNumChange={handleNumChange}/>
      <h2>Numerot</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
