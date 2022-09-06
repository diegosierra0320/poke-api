import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/Slices/nameTrainer.slice'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    
    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home'>
      <div className='home__header'>
        <img src="./utils/image 11.svg" alt="" />
        <h1>¡Hi trainer!</h1>
        <b>To start give me your trainer name</b>
        <form className='home__input' onSubmit={handleSubmit}>
          <input id='name' type="text" placeholder='Your name...'/>
          <button className='home__btn'>Catch them all</button>
        </form>
      </div>
      
      <footer className='home__footer'>
        <h1 className='home__footer__reg1'></h1>
        <h1 className='home__footer__reg2'>r</h1>
        <div className='home__footer_circle'>
          <h1 className='home__footer__cir1'></h1>
          <h1 className='home__footer__cir2'></h1>
        </div>
      </footer>
    </div>
  )
}

export default Home