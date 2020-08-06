import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import MyStack from '../pages/MyStack'

function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home where='projects'>
              <span>🐱‍🐉</span>
            </Home>
          </Route>

          <Route exact path='/experience'>
            <Home where='experience'>
              <span>🐱‍💻</span>
            </Home>
          </Route>

          <Route exact path='/contact'>
            <Home where='contact'>
              <span>🐱‍👤</span>
            </Home>
          </Route>

          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/mystack' component={MyStack} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App