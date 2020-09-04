import React from 'react'

import '../assets/styles/pages/ProjectsContainer.styl'

const ProjectsContainer = ({ children }) => {
  return(
    <div className="projects-container">
      { children }
    </div>
  )
}

export default ProjectsContainer