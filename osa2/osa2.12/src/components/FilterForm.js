import React from 'react'

const FilterForm = ({ handleFilterChange }) => {
    return (
      <div>
          <form>
            <div>find countries:  
              <input
              onChange={handleFilterChange}
              />
            </div>
          </form>
      </div>
    )

}

export default FilterForm