import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/NotFound.styl'

const NotFound = () => {
  return(
    <div className="notFound">
      <h1>404</h1>
      <h2>Esta no es la ruta que estas buscando...</h2>
      <Link to='/'>
        Ir a inicio
      </Link>
    </div>
  )
}

export default NotFound