import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexId = () => {

  const { name } = useParams()

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default PokedexId