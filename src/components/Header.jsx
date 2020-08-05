import React from 'react'

import Rotated from './Rotated'
import Menu from './Menu'
import menu_icon from '../../assets/static/menu.png'

import '../../assets/styles/components/Header.styl'

class Header extends React.Component {
  state = {
    menuIsOpen: false
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
    }, 980);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  render(){
    return(
      <Rotated className='header'>
        <button className='header__menu-button btn' onClick={this.handleOpenMenu}>
          <img src={menu_icon} className='header__menu-image btn-img' alt='Botón de menú'/>
        </button>
        <Menu
          isActive={this.state.menuIsOpen}
          onClose={this.handleCloseMenu}
        />
      </Rotated>
    )
  }
}

export default Header