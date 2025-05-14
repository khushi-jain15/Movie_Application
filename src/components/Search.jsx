import React from 'react'

// if we are going to pass the props as keyword then for calling the searchTerm as a prop so that we do not have to do props.searcterm
const Search = ({searchTerm , setsearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.png" alt="search"  />

            <input
                type = "text"
                placeholder='search for a movie from 300+ movies'
                value={searchTerm}
                onChange={(event)=> setsearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
