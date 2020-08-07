import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../../assets/styles/components/Navbar.styl'

class Navbar extends React.Component {

  // componentDidMount() {
  //   this.styleLink()
  // }
  // componentDidUpdate() {
  //   this.styleLink()
  // }

  // styleLink = () => {
  //   const { where } = this.props

  //   const projects = document.getElementById('projects')
  //   const experience = document.getElementById('experience')
  //   const contact = document.getElementById('contact')
    
  //   projects.classList.remove('active')
  //   experience.classList.remove('active')
  //   contact.classList.remove('active')

  //   if (where === 'projects') {
  //     projects.classList.add('active')
  //   } else if (where === 'experience') {
  //     experience.classList.add('active')
  //   } else if (where === 'contact') {
  //     contact.classList.add('active')
  //   }
  // }

  render() {
  return(
    <div className='navbar'>
      <div className='navbar-container'>
        {/* <Link to='/' className='navbar__link' id='projects'>
          Proyectos
        </Link>
        <Link to='/experience' className='navbar__link' id='experience'>
          Experiencia
        </Link>
        <Link to='/contact' className='navbar__link' id='contact'>
          Contacto
        </Link> */}

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
}

export default Navbar