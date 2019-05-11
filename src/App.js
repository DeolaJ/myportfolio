import React, { Component } from 'react'
import './App.scss'
import Nav from '../src/components/Nav/Nav'
import Body from '../src/components/Body/Body'
import Footer from '../src/components/Footer/Footer'

class App extends Component {

  render () {

    return (
      <div className={'portfolio'}>
        <Nav/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
