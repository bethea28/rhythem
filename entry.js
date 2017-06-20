import React from 'react'

import AppContainer from './app'
import store from './store'
import {Provider} from 'react-redux'


import {render} from 'react-dom
import ReactDOM from 'react-dom'
import {HashRouter, Route, Router} from 'react-router-dom'

const Routes = () => (
  <div>

    <Route exact path = '/' component = {AppContainer}>
    </Route>
  </div>
)


render(
  <Provider store = {store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
