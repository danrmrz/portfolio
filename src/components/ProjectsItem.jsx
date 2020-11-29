import React from 'react'

import '../assets/styles/components/ProjectsItem.styl'

const web_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Fglobe-w.png?alt=media&token=ea3344fa-15db-498a-bf3f-200ec60867e6'
const gitHub_icon = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/icons%2Fgithub-w.png?alt=media&token=2becf449-8765-428f-9487-82be45a099c7'

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
          <img src={web_icon} alt='Icono de web' />
          Link al proyecto
        </a>
        <a
          href={linkGitHub}
          target='_blank'
          className='projects-item__links--button link-button'
        >
          <img src={gitHub_icon} alt='Icono de GitHub' />
          Link al repositorio
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem