import React from 'react'
import { Link } from 'react-router-dom'

import Rotated from '../components/Rotated'
import Navbar from '../components/Navbar'

import profile from '../assets/static/profile.jpg'

import '../assets/styles/pages/Home.styl'

const Home = ({ children }) => {
  return(
    <>
      <div className='introduce'>
        <div className='myself'>
          <img src={ profile } alt=''/>
          <h1 className='page-title'>Hola, yo soy Dan Ramirez</h1>
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