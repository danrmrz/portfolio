import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import AboutMe from '../pages/AboutMe'
import MyStack from '../pages/MyStack'
import Experience from '../pages/Experience'
import ProjectsContainer from '../pages/ProjectsContainer'
import ProjectsItem from '../components/ProjectsItem'
import NotFound from '../components/NotFound'

const project1 = './src/assets/static/projects/project-1.jpeg'
const project2 = './src/assets/static/projects/project-2.jpg'
const project3 = './src/assets/static/projects/project-3.jpeg'
const project4 = './src/assets/static/projects/project-4.jpg'
const project5 = './src/assets/static/projects/project-5.jpg'

function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home>
              <ProjectsContainer>
                <ProjectsItem
                  name='Proyecto 1'
                  description='
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ab sed eligendi illum 
                    cupiditate adipisci, itaque, aspernatur 
                    ullam, enim aperiam eius nobis reiciendis. 
                    Molestiae quas enim exercitationem ex 
                    labore facere. Dolore.
                  '
                  image={project1}
                />
                <ProjectsItem
                  name='Proyecto 2'
                  description='
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ab sed eligendi illum 
                    cupiditate adipisci, itaque, aspernatur 
                    ullam, enim aperiam eius nobis reiciendis. 
                    Molestiae quas enim exercitationem ex 
                    labore facere. Dolore.
                  '
                  image={project2}
                />
                <ProjectsItem
                  name='Proyecto 3'
                  description='
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ab sed eligendi illum 
                    cupiditate adipisci, itaque, aspernatur 
                    ullam, enim aperiam eius nobis reiciendis. 
                    Molestiae quas enim exercitationem ex 
                    labore facere. Dolore.
                  '
                  image={project3}
                />
                <ProjectsItem
                  name='Proyecto 4'
                  description='
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ab sed eligendi illum 
                    cupiditate adipisci, itaque, aspernatur 
                    ullam, enim aperiam eius nobis reiciendis. 
                    Molestiae quas enim exercitationem ex 
                    labore facere. Dolore.
                  '
                  image={project4}
                />
                <ProjectsItem
                  name='Proyecto 5'
                  description='
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ab sed eligendi illum 
                    cupiditate adipisci, itaque, aspernatur 
                    ullam, enim aperiam eius nobis reiciendis. 
                    Molestiae quas enim exercitationem ex 
                    labore facere. Dolore.
                  '
                  image={project5}
                />
              </ProjectsContainer>
            </Home>
          </Route>

          <Route exact path='/experience'>
            <Home>
              <Experience/>
            </Home>
          </Route>

          <Route exact path='/contact'>
            <Home>
              <Contact/>
            </Home>
          </Route>

          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/mystack' component={MyStack} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App