import React from 'react'

import Rotated from './Rotated'
import Menu from './Menu'
import menu_icon from '../assets/static/menu.png'

import '../assets/styles/components/Header.styl'

class Header extends React.Component {
  constructor() {
    super()
    if (window.innerWidth >= 1024) {
      this.state = {
        menuIsOpen: true
      }
      const closeMenu = (() => {})
    } else {
      this.state = {
        menuIsOpen: false
      }
      const closeMenu = this.handleCloseMenu
    }
    window.addEventListener('resize', this.handleResizeWindow)
  }

  handleOpenMenu = () => {
    this.setState({ menuIsOpen: true })
  }

  handleCloseMenu = () => {
    const menu = document.getElementById('menu')
    const menuContainer = document.getElementById('menu-container')
    menu.classList.add('close')
    menuContainer.classList.add('close')
    this.timeoutId = setTimeout(() => {
      this.setState({ menuIsOpen: false })
    }, 980)
  }

  handleResizeWindow = () => {
    if (window.innerWidth >= 1024 && !this.state.menuIsOpen) {
      this.handleOpenMenu()
      this.closeMenu = () => {}
    } else if (window.innerWidth < 1024 && this.state.menuIsOpen) {
      this.handleCloseMenu()
      this.closeMenu = this.handleCloseMenu
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
    window.removeEventListener('resize', this.handleResizeWindow)
  }

  render(){
    return(
      <Rotated className='header'>
        <div
          className='header__menu-button btn'
          onClick={this.handleOpenMenu}
        >
          <img
            src={menu_icon}
            className='header__menu-image btn-img'
            alt='Botón de menú'
          />
        </div>
        <Menu
          isActive={this.state.menuIsOpen}
          onClose={this.closeMenu}
        />
      </Rotated>
    )
  }
}

export default Header