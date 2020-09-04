import React from 'react'

import webIcon from '../assets/static/globe-w.png'
import gitHubIcon from '../assets/static/github-w.png'

import '../assets/styles/components/ProjectsItem.styl'

const ProjectsItem = (props) => {
  
  const {
    name,
    description,
    image,
    linkProject,
    linkGitHub
  } = props

  return(
    <div className='projects-item'>
      <img
        src={image}
        alt='Imagen del proyecto'
        className='projects-item__image'
      />
      <div className='projects-item__info'>
        <h3 className='projects-item__info--title'>{name}</h3>
        <p className='projects-item__info--description'>
          {description}
        </p>
      </div>
      <div className='projects-item__links'>
        <a
          href={linkProject}
          target='_blank'
          className='projects-item__links--button link-button'
        >
          <img src={webIcon} alt='Icono de web' />
          Link al proyecto
        </a>
        <a
          href={linkGitHub}
          target='_blank'
          className='projects-item__links--button link-button'
        >
          <img src={gitHubIcon} alt='Icono de GitHub' />
          Link al repositorio
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem