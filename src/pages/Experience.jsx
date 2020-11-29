import React from 'react'

import '../assets/styles/pages/Experience.styl'

const hacker_cat = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/hackerCat.png?alt=media&token=8f313492-6ac7-4f1d-bba4-3a7983401175'

const Experience = () => {
  return(
    <div className='experience'>
      <div className='experience__comingSoon'>
        <img
          src={hacker_cat}
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