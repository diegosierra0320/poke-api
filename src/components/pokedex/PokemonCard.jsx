import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.name}`)
    }

    
  return (
    <div className={`card bg-boder-${pokemon?.types[0].type.name}`}>
      <div className={`card__header__color bg-${pokemon?.types[0].type.name}`}></div>
      <article onClick={handleClick}>
        <header className='card__header'>
          <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
        <section className='card__section'>
          <b>{pokemon?.name}</b>
          <ul>
            {
              pokemon?.types.map(slot => (
                <li key={slot.type.url}>{slot.type.name}</li>
              ))
            }
          </ul>
        </section>
        <footer className='card_footer'>
          <ul>
            {
              pokemon?.stats.map(stat => (
                <StatPokemon
                  key={stat.stat.url}
                  infoStat={stat}
                />
              ))
            }
          </ul>
        </footer>
      </article>
    </div>
  )
}

export default PokemonCard