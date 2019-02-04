import React from 'react'

const Country = ({ country }) => {
  return (
      <div>{country.name}</div>
  )
}

const Countries = ({ countries, filter }) => {

  const rows = () => countriesToShow.map(country =>
    <Country 
      key={country.name}
      person={country}
    />
  )
  const countriesToShow = countries.filter(country => country.name.includes(filter))

    return (
      <div>
          {rows()}
      </div>

    )

}

export default Countries