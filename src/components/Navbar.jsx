import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/styles/components/Navbar.styl'

class Navbar extends React.Component {

  componentDidMount() {
    this.styleLink()
  }
  componentDidUpdate() {
    this.styleLink()
  }

  styleLink = () => {
    const { where } = this.props

    const projects = document.getElementById('projects')
    const experience = document.getElementById('experience')
    const contact = document.getElementById('contact')

    if (where === 'projects') {
      projects.classList.add('active')
      experience.classList.remove('active')
      contact.classList.remove('active')
      console.log(`Estas en ${where}`);
    } else if (where === 'experience') {
      experience.classList.add('active')
      projects.classList.remove('active')
      contact.classList.remove('active')
      console.log(`Estas en ${where}`);
    } else if (where === 'contact') {
      contact.classList.add('active')
      projects.classList.remove('active')
      experience.classList.remove('active')
      console.log(`Estas en ${where}`);
    }
  }

  render() {
  return(
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/' className='navbar__link' id='projects'>
          Proyectos
        </Link>
        <Link to='/experience' className='navbar__link' id='experience'>
          Experiencia
        </Link>
        <Link to='/contact' className='navbar__link' id='contact'>
          Contacto
        </Link>
      </div>
    </div>
  )
  }
}

export default Navbar