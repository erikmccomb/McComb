import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Link to='/McComb'>
          <Menu.Item name='Mccomb'>
            McComb
          </Menu.Item>
        </Link>

        <Link to='/Portfolio'>
          <Menu.Item name='Portfolio'>
            Portfolio
          </Menu.Item>
        </Link>

        
        <Menu.Item name='Blog'>
          <a href="https://erikmccombblog.netlify.com/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='Github' >
            <a href="http://github.com/erikmccomb" target="_blank" rel="noopener noreferrer" >
              <Icon name='github' size='large' />
            </a>
          </Menu.Item>

          <Menu.Item name='Linkedin' >
            <a href="https://www.linkedin.com/in/erikmccomb/" target="_blank" rel="noopener noreferrer">
              <Icon name='linkedin' size='large' />
            </a>
          </Menu.Item>

          <Menu.Item name='Twitter' >
            <a href="https://twitter.com/Erik_the_Mick" target="_blank" rel="noopener noreferrer">
              <Icon name='twitter' size='large' />
            </a>
          </Menu.Item>

          <Menu.Item name='Instagram'>
            <a href="http://www.instagram.com/itserikwith_a_k/" target="_blank" rel="noopener noreferrer">
              <Icon name='instagram' size='large' />
            </a>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
