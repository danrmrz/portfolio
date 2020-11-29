import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import AboutMe from '../pages/AboutMe'
import MyStack from '../pages/MyStack'
import Experience from '../pages/Experience'
import ProjectsContainer from '../pages/ProjectsContainer'
import NotFound from '../components/NotFound'

function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home>
              <ProjectsContainer></ProjectsContainer>
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