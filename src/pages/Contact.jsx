import React from 'react'

import email_icon from '../assets/static/mail-w.png'
import twitter_icon from '../assets/static/twitter-w.png'

import '../assets/styles/pages/Contact.styl'

const twitterLink = 'https://twitter.com/soydanrmrz'
const email = 'danrmrz@outlook.com'

const Contact = () => {
  return(
    <div className='contact text-container'>
      <h2 className='contact__title page-title'>
        ¿Quieres hablar conmigo?
      </h2>

      <p className='contact__description'>
        Si te interesa hablar conmigo, ya sea 
        sobre trabajo, si tienes alguna duda o 
        sugerencia sobre alguno de mis proyectos,
         o si crees que te podría ayudar con 
        algún otro tema, puedes enviarme un 
        correo, o bien, un mensaje directo por 
        Twitter.
      </p>

      <ul className='contact__links-container'>
        <li>
          <a
            href={`mailto:${email}`}
            className='contact__links-container--links link-button'
          >
            <img
              src={email_icon}
              alt='icono de email'
              className='contact__links-container--images'
            />
            Envíame un correo
          </a>
        </li>
        
        <li>
          <a
            href={twitterLink}
            target='_blank'
            className='contact__links-container--links link-button'
          >
            <img
              src={twitter_icon}
              alt='icono de twitter'
              className='contact__links-container--images'
            />
            Contáctame por Twitter
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact