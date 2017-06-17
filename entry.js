import React from 'react'

import AppContainer from './app'
import store from './store'
import {Provider} from 'react-redux'


import {render} from 'react-dom'
import ReactDOM from 'react-dom'

import {browserHistory, Router, Route} from 'react-router'
import {HashRouter} from 'react-router-dom'

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
// render(
//   <Provider store = {store}>
//     <Router history ={hashHistory} routes = {Routes} />
//   </Provider>,
//   document.getElementById('root')
// )
