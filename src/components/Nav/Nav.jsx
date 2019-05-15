import React, { Component } from 'react'
import './Nav.scss'
import { Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {

  render () {

    const navItems = [
      {
        id: 1,
        name: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        id: 2,
        name: 'About',
        link: '/about',
        icon: 'user'
      },
      {
        id: 3,
        name: 'Portfolio',
        link: '/portfolio',
        icon: 'bar'
      },
      {
        id: 4,
        name: 'Contact',
        link: '/contact',
        icon: 'phone'
      }
    ]

    return (
      <nav className={'nav'}>
        <List horizontal link>
          {
            navItems.map((item) => (
              <List.Item key={item.id}>
                <Link to={item.link}>
                  <Icon name={item.icon} />{item.name}
                </Link>
              </List.Item>
            ))
          }
        </List>
      </nav>
    )
  }
}

export default Nav