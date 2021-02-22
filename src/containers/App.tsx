import * as React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'

import { THEME, getTheme } from '../theme'
import { ROUTE } from '../routes'

import style from './App.module.css'

import Header from '../common/layout/Header';
import Search from '../modules/search/Search';
import Results from '../modules/results/Results';
import Footer from '../common/layout/Footer';

const engine = new Styletron()

function App() {
  const [theme] = React.useState(THEME.light) // TODO: default to user preference

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={getTheme(theme)}>
        <Router>

        <div className={style.layout}>
          <Header/>
          <main>
            <Switch>
              <Route exact path={ROUTE.home}>
                <Search />
                <Results />
              </Route>
              <Route path={ROUTE.search}>
                <Search />
                <Results />
              </Route>
              <Route path={ROUTE.results}>
                <Search />
                <Results />
              </Route>
              <Route path={ROUTE.schedule}>
                <Results />
              </Route>
              <Route path={ROUTE.profile}>
                <Results />
              </Route>
              <Route path={ROUTE.confirm}>
                <Results />
              </Route>
            </Switch>

            
          </main>
          <Footer/>
        </div>
        
        </Router>
      </BaseProvider>
    </StyletronProvider>    
  );
}

export default App;
