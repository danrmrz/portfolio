import React from 'react'
import { Link } from 'react-router-dom'

import Rotated from '../components/Rotated'
import Navbar from '../components/Navbar'

import '../assets/styles/pages/Home.styl'

const profile = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/profile.jpg?alt=media&token=80611309-1500-4a99-9e97-34e06251f4e6'

const Home = ({ children }) => {
  return(
    <>
      <div className='introduce'>
        <div className='myself'>
          <img
            src={ profile }
            alt='Fotografía personal'
            className='myself--image'
          />
          <h1 className='myself--title page-title'>
            Hola, yo soy Dan Ramirez
          </h1>
        </div>

        <Rotated>
          <h2 className='title'>
            Un frontend que sabe HTML, CSS, 
            JavaScript y {' '}
            <Link  to='/mystack' className='title--link'>
              una que otra cosa más
            </Link>
          </h2>
        </Rotated>
      </div>

      <Navbar />
      
      { children }
    </>
  )
}

export default Home