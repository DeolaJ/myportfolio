import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './Body.scss'
import { Grid } from 'semantic-ui-react'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

class Body extends Component {

  render () {
    return (
      <main className={'mainbody'}>
        <Grid stackable>
          <Grid.Column width={16}>
            <Router>
              <Switch>
                <Route path={'/home'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route path={'/portfolio'} component={Portfolio} />
                <Route path={'/contact'} component={Contact} />
              </Switch>
            </Router>
          </Grid.Column>
        </Grid>
      </main>
    )
  }
}

export default Body