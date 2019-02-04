import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
        .then(
            response.forEach(function(item, index, array) {
            setCountries(countries.concat(item))
            }
        )
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <FilterForm handleFilterChange={handleFilterChange}/>
      <h2>Countries</h2>
      <Countries countries={countries} filter={filter}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
