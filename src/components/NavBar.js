// Required by React
  import React from 'react';
// Pre-styled Components
  import { Dropdown, Menu, Icon } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import 'semantic-ui-css/semantic.min.css';

class NavBar extends React.Component {
  render() {
    return (
      <Menu  borderless style={styles.menuStyle} >
        <Link to='/McComb'>
          <Menu.Item 
            name='Mccomb' 
            style={styles.menuButton}
          >
            McComb
          </Menu.Item>
        </Link>

        <Link to='/Portfolio'>
          <Menu.Item 
            name='Portfolio' 
            style={styles.menuButton}
          >
            Portfolio
          </Menu.Item>
        </Link>

        
        <Menu.Item name='Blog' style={styles.menuButton}>
        <a href="https://erikmccombblog.netlify.com/" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
          Blog
        </a>
        </Menu.Item>

        <Menu.Menu position='right' style={styles.menuButton}>
          <Menu.Item style={styles.button} name='Github' >
            <a href="http://github.com/erikmccomb" target="_blank" rel="noopener noreferrer" >
              <Icon name='github' size='large' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item style={styles.button} name='Linkedin' >
            <a href="https://www.linkedin.com/in/erikmccomb/" target="_blank" rel="noopener noreferrer">
              <Icon name='linkedin' size='large' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item style={styles.button} name='Twitter' >
            <a href="https://twitter.com/Erik_the_Mick" target="_blank" rel="noopener noreferrer">
              <Icon name='twitter' size='large' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item style={styles.button} name='Instagram'>
            <a href="http://www.instagram.com/itserikwith_a_k/" target="_blank" rel="noopener noreferrer">
              <Icon name='instagram' size='large' style={styles.icon} />
            </a>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const styles = {
  menuStyle: {
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FuturaPTBook',
    fontSize: '16px', 
    backgroundColor: '#7de2d1',
    borderRadius: '0px',
    borderBottom: '1px solid #131515',
  },
  menuButton: {
    padding: '0px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
  },
  button: {
    padding: '0px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
  },
  icon: {
    color: '#131515'
  }
}

export default NavBar;
