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
                  image='../../assets/static/projects/project-1.jpeg'
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
                  image='../../assets/static/projects/project-2.jpg'
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
                  image='../../assets/static/projects/project-3.jpeg'
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
                  image='../../assets/static/projects/project-4.jpg'
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
                  image='../../assets/static/projects/project-5.jpg'
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