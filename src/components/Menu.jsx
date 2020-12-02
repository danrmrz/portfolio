import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Menu.styl'

const close_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Fclose-w.png?alt=media&token=6caf9848-943f-41f5-9f80-59f0aa4436a3'
const gitHub_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Fgithub-w.png?alt=media&token=2becf449-8765-428f-9487-82be45a099c7'
const linkedIn_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Flinkedin-w.png?alt=media&token=4f5cd70b-6e8e-456d-989d-0ce170d62ab2'
const twitter_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Ftwitter-w.png?alt=media&token=15732cdd-669d-4a33-b183-1761fbc9c613'
const hacker_cat = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/hackerCat.png?alt=media&token=8f313492-6ac7-4f1d-bba4-3a7983401175'

const gitHubLink = 'https://github.com/danrmrz'
const linkedInLink = 'https://linkedin.com/in/danrmrz'
const twitterLink = 'https://twitter.com/soydanrmrz'

const Menu = ({ isActive, onClose }) => {
  if (!isActive) {
    return(
      null
    )
  }

  return ReactDOM.createPortal(
    <div className='menu-container' id='menu-container'>
      <div className='menu' id='menu'>
        <div className='menu__button-container'>
          <div
            className='menu__button btn'
            onClick={onClose}
          >
            <img
              src={close_icon}
              alt='Botón para cerrar menú'
              className='menu__button-image btn-img'
            />
          </div>
        </div>

        <div className='menu__links'>
          <Link
            to='/'
            className='menu__links--titles'
            onClick={onClose}
          >
            Inicio
          </Link>
          <Link
            to='/aboutme'
            className='menu__links--titles'
            onClick={onClose}
          >
            Acerca de mi
          </Link>
        </div>

        <div className='menu__social'>
          <span className='menu__links--titles'>
            Mis redes
          </span>
          <div className='menu__social-links'>
            <a href={gitHubLink} target='_blank'>
              <img
                src={gitHub_icon}
                alt='icono de gitHub'
                className='menu__social-links--images'
              />
            </a>
            <a href={linkedInLink}  target='_blank'>
              <img
                src={linkedIn_icon}
                alt='icono de linkedIn'
                className='menu__social-links--images'
              />
            </a>
            <a href={twitterLink}  target='_blank'>
              <img
                src={twitter_icon}
                alt='icono de twitter'
                className='menu__social-links--images'
              />
            </a>
          </div>
        </div>

        <div className='menu__made'>
          <span>
            <img
              src={hacker_cat}
              alt='Gato hacker'
              className='menu__made--image'
            />
            Daniel Ramirez 2020
          </span>
        </div>
      </div>
      
      <div className='clickToClose' onClick={onClose}></div>
    </div>,
    document.getElementById('modal')
  )
}

export default Menu