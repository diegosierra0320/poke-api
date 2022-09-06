import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './pokedex/PokemonCard'
import SearchImput from './pokedex/SearchImput'
import SelectType from './pokedex/SelectType'
import PokedexId from './PokedexId'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const navigate = useNavigate()

  useEffect(() => {
    
    if (pokeSearch || optionType !== 'All'){
      if(pokeSearch){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
  
        const obj = {
          results: [{url}]
      }
      setPokemons(obj)
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    }

    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])

  const nameTrainer = useSelector(state => state.nameTrainer)

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='pokedex'>
      <header>
        <img onClick={handleClick} className='pokedex__header__img' src="./utils/image 11.svg" alt="" />
        <h1 className='pokedex__header__reg1'>r</h1>
        <h1 className='pokedex__header__reg2'>r</h1>
        <div className='pokedex__header_circle'>
          <h1 className='pokedex__header__cir1'></h1>
          <h1 className='pokedex__header__cir2'></h1>
         </div>
      </header>
      <div className='pokedex__title'>
        <h2><p>Welcome {nameTrainer}!</p>Catch them all</h2>
      </div>
      <div className='pokedex__input'>
        <SearchImput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
        <SelectType
          setOptionType={setOptionType}
          setPokeSearch={setPokeSearch}
          />
      </div>
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex