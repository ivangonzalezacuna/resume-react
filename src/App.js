import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resume from './pages'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation('data')

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact render={() =>
            <Resume t={t} i18n={i18n} />}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App