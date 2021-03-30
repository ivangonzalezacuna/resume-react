import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resume from './pages/resume'
import Page404 from './pages/page404'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation('data')

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" render={() =>
            <Resume t={t} i18n={i18n} />}
          />
          <Route path="*" render={() =>
            <Page404 t={t} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App