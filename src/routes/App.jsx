import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'

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
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App