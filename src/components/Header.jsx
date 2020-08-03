import React from 'react'

import Rotated from './Rotated'
import menu from '../../assets/static/menu.png'

import '../../assets/styles/components/Header.styl'

const Header = () => {
  return(
    <Rotated className='header'>
      <button className='header__menu'>
        <img src={menu} className='header__menu-image' alt='Botón de menú'/>
      </button>
    </Rotated>
  )
}

export default Header