import React from 'react'

import ProjectsItem from'../components/ProjectsItem'

import '../assets/styles/pages/ProjectsContainer.styl'

const hacker_cat = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/hackerCat.png?alt=media&token=8f313492-6ac7-4f1d-bba4-3a7983401175'

const projects = [{
  id: 1,
  name: "Pokedex",
  description: "Un pokédex hecho en reacty stylus usando datos de la pokeAPI (https://pokeapi.co)",
  image: "https://firebasestorage.googleapis.com/v0/b/portfolio-a27aa.appspot.com/o/projects%2Fpokedex.png?alt=media&token=986e37a9-c8d9-4417-af62-b4dd6c0b5e86",
  linkProject: "https://pokedex.danrmrz.vercel.app/",
  linkGitHub: "https://github.com/danrmrz/pokedex/"
}]

const ProjectsContainer = () => {
  return(
    <div className="projects-container">
      {projects.map(project => 
        <ProjectsItem
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          linkProject={project.linkProject}
          linkGitHub={project.linkGitHub}
        ></ProjectsItem>
      )}
      <div className='experience__comingSoon'>
        <img
          src={hacker_cat}
          alt='Gato hacker'
          className='experience__comingSoon--image'
        />
        <h2 className='experience__comingSoon--title'>
          Más proyectos proximamente...
        </h2>
      </div>
    </div>
  )
}

export default ProjectsContainer