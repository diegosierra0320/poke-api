import React from 'react'

const SearchImput = ({setPokeSearch, setOptionType}) => {

const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
}

  return (
    <form className='pokedex__search' onSubmit={handleSubmit}>
        <input id='searchText' type="text"placeholder='Search a pokemon' />
        <button>Search</button>
    </form>
  )
}

export default SearchImput