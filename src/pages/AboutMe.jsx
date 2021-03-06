import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/pages/AboutMe.styl'

const AboutMe = () => {
  return(
    <div className='aboutme text-container'>
      <h1 className='aboutme__title page-title'>¿Quién soy?</h1>
      <p>
        Hola, soy Daniel Ramirez Ramirez, soy un 
        desarrollador frontend mexicano que se ha 
        formado principalmente en Internet, también 
        estudié ingeniería en computación en ESIME 
        Culhuacán del IPN, no terminé la carrera, 
        pero estudié ahí.
      </p>

      <p>
        Como desarrollador mi stack esta centrado
         en JavaScript, te dejo más detalles por 
         {' '}
        <Link to='/mystack'>
          aquí.
        </Link>
      </p>

      <p>
        Mi tiempo libre se lo dedico, sobre todo, 
        a jugar videojuegos, escuchar la misma 
        música desde hace años, tocar mi guitarra 
        de vez en cuando y claro, seguir 
        aprendiendo, así que no, no me golpeó muy 
        fuerte el encierro de este año.
      </p>
      
      <p>
        Si te quieres poner en contacto conmigo 
        {' '}
        <Link to='/contact'>
          aquí
        </Link>
        {' '}
        te dejo mi correo y mi twitter
      </p>
    </div>
  )
}

export default AboutMe