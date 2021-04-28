import React, { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ScrollToTop from './ScrollToTop'
import './locales/i18n'

ReactDOM.render(
  <Fragment>
    <StrictMode>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </StrictMode>
  </Fragment>,
  document.getElementById('root')
)