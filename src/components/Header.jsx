import React, { useState, useEffect, useRef } from 'react'

import Rotated from './Rotated'
import Menu from './Menu'

import '../assets/styles/components/Header.styl'

const menu_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Fmenu.png?alt=media&token=bfe22667-0e20-4751-9182-d749f4e6303c'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleOpenMenu = () => {
    setMenuIsOpen(true)
  }

  const handleCloseMenu = () => {
    const menu = document.getElementById('menu')
    const menu_container = document.getElementById('menu-container')
    menu.classList.add('close')
    menu_container.classList.add('close')
    window.timeoutId = setTimeout(()=>{setMenuIsOpen(false)}, 980)
  }

  const handleMenuState = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true)
      handleOpenMenu()
    } else {
      setIsDesktop(false)
      setMenuIsOpen(false)
    }
  }

  useEffect(()=>{
    handleMenuState()
    window.addEventListener('resize', handleMenuState)
    
    return function cleanEventListener() {
      clearTimeout(window.timeoutId)
      window.removeEventListener('resize', handleMenuState)
    }
  }, [])

  return(
    <Rotated className='header'>
      <div
        className='header__menu-button btn'
        onClick={handleOpenMenu}
      >
        <img
          src={menu_icon}
          className='header__menu-image btn-img'
          alt='Botón de menú'
        />
      </div>
      <Menu
        isActive={menuIsOpen}
        onClose={isDesktop ? null : handleCloseMenu}
      />
    </Rotated>
  )
}

export default Header