import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import close_icon from '../../assets/static/close-w.png'
import gitHub_icon from '../../assets/static/github-w.png'
import linkedIn_icon from '../../assets/static/linkedin-w.png'
import twitter_icon from '../../assets/static/twitter-w.png'
import hackerCat from '../../assets/static/hackerCat.png'

import '../../assets/styles/components/Menu.styl'

const gitHubLink = 'https://github.com/danrmrz'
const linkedInLink = 'https://linkedin.com/in/danrmrz'
const twitterLink = 'https://twitter.com/soydanrmrz'

const Menu = (props) => {
  if (!props.isActive) {
    return(
      null
    )
  }
  return ReactDOM.createPortal(
    <div className='menu-container' id='menu-container'>
      <div className='menu' id='menu'>
        <div className='menu__button-container'>
          <div className='menu__button btn' onClick={props.onClose}>
            <img src={close_icon} alt='' className='menu__button-image btn-img'/>
          </div>
        </div>

        <div className='menu__links'>
          <Link to='/' className='menu__links--titles' onClick={props.onClose}>
            Inicio
          </Link>
          <Link to='/aboutme' className='menu__links--titles' onClick={props.onClose}>
            Acerca de mi
          </Link>
        </div>

        <div className='menu__social'>
          <span className='menu__links--titles'>
            Mis redes
          </span>
          <div className='menu__social-links'>
            <a href={gitHubLink} target='_blank'>
              <img src={gitHub_icon} alt='icono de gitHub' className='menu__social-links--images' />
            </a>
            <a href={linkedInLink}  target='_blank'>
              <img src={linkedIn_icon} alt='icono de linkedIn' className='menu__social-links--images' />
            </a>
            <a href={twitterLink}  target='_blank'>
              <img src={twitter_icon} alt='icono de twitter' className='menu__social-links--images' />
            </a>
          </div>
        </div>

        <div className='menu__made'>
          <span>
            <img
              src={hackerCat}
              alt='Gato hacker'
              className='menu__made--image'
            />
            Daniel Ramirez 2020
          </span>
        </div>
      </div>
      
      <div className='clickToClose' onClick={props.onClose}></div>
    </div>,
    document.getElementById('modal')
  )
}

export default Menu