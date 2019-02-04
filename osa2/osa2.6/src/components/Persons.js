import React from 'react'
import personService from '../services/persons'


const Person = ({ person }) => {
  return (
      <div>{
        person.name}, puh: {person.number} </div>
  )
}

const Persons = ({ persons, filter }) => {

  const rows = () => personsToShow.map(person =>
    <Person 
      key={person.name}
      person={person}
    />
  )
  const personsToShow = persons.filter(person => person.name.includes(filter))

    return (
      <div>
          {rows()}
      </div>

    )

}

export default Persons