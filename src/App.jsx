import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='pokedex' element={<Pokedex />} />
          <Route path='pokedex/:name' element={<PokedexId />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App