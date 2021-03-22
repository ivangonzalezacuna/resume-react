import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './locales/i18n'

ReactDOM.render(
  <Fragment>
    <Router>
      <App />
    </Router>
  </Fragment>
  ,
  document.getElementById('root')
)
