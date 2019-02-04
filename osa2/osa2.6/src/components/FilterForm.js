import React from 'react'

const FilterForm = ({ handleFilterChange }) => {
    return (
      <div>
        <div>rajaa näytettäviä: </div>
          <form>
            <div>filter:  
              <input
              onChange={handleFilterChange}
              />
            </div>
          </form>
      </div>
    )

}

export default FilterForm