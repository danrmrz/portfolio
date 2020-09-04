import React from 'react'

import hackerCat from '../assets/static/hackerCat.png'

import '../assets/styles/pages/Experience.styl'

const Experience = () => {
  return(
    <div className='experience'>
      <div className='experience__comingSoon'>
        <img
          src={hackerCat}
          alt='Gato hacker'
          className='experience__comingSoon--image'
        />
        <h2 className='experience__comingSoon--title'>
          Proximamente...
        </h2>
      </div>
    </div>
  )
}

export default Experience