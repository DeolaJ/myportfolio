import React, { Component } from 'react'
import './Footer.scss'

class Footer extends Component {

  componentDidMount () {
    const footerYear = document.querySelector('.footer-year')
    const currentYear = new Date().getFullYear()

    footerYear.innerHTML = currentYear
  }

  render () {

    return (
      <footer className={'footer'}>
        <div>
          All Rights Reserved, &copy; Copyright <span className={'footer-year'}></span> Adeola Adeyemo 
        </div>
      </footer>
    )
  }
}

export default Footer