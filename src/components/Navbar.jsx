import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../assets/styles/components/Navbar.styl'

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='navbar-container'>
        <NavLink exact to='/' className='navbar__link' activeClassName='active'>
          Proyectos
        </NavLink>

        <NavLink to='/experience' className='navbar__link' activeClassName='active'>
          Experiencia
        </NavLink>

        <NavLink to='/contact' className='navbar__link' activeClassName='active'>
          Contacto
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar