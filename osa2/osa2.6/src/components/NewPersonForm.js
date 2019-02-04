import React from 'react'


const NewPersonForm = ({ addPerson, handleNameChange, handleNumChange }) => {
    return (
      <div>
        <h2>lisää uusi</h2>
          <form onSubmit={addPerson}>
      <div>nimi:  
      <input
        onChange={handleNameChange}
        />
      </div>
      <div>
      numero:
      <input
        onChange={handleNumChange}
        />
      </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      </div>
    )

}

export default NewPersonForm