import React, { Component } from 'react'
import './App.scss'
import Nav from '../src/components/Nav/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import Body from '../src/components/Body/Body'
import Footer from '../src/components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {

  render () {

    return (
      <div className={'portfolio'}>

        <Router basename={'/'}>
          <Nav/>
          <Body/>
        </Router>
        
        <Footer/>
      </div>
    )
  }
}

export default App;
