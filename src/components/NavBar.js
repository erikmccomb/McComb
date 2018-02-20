// Required by React
  import React from 'react';
// Pre-styled Components
  import { Dropdown, Menu } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import 'semantic-ui-css/semantic.min.css';

class NavBar extends React.Component {
  //Handles the active page indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu  borderless style={styles.menuStyle} >
        <Link style={{color: 'white'}} to='/McComb'>
          <Menu.Item 
            name='Mccomb' 
            active={activeItem === 'McComb'} 
            onClick={this.handleItemClick} 
            style={styles.menuButton}
          >
            McComb
          </Menu.Item>
        </Link>

        <Link style={{color: 'white'}} to='/Portfolio'>
          <Menu.Item 
            name='Portfolio' 
            active={activeItem === 'Portfolio'} 
            onClick={this.handleItemClick} 
            style={styles.menuButton}
          >
            Portfolio
          </Menu.Item>
        </Link>

        <Link style={{color: 'white'}} to='/Blog'>
          <Menu.Item 
            name='Blog' 
            active={activeItem === 'Blog'} 
            onClick={this.handleItemClick} 
            style={styles.menuButton}
          >
            Blog
          </Menu.Item>
        </Link>

        <Menu.Menu position='right' style={styles.menuButton}>
          <Dropdown item text='+ More' style={styles.menuButton}>
            <Dropdown.Menu>

              <Dropdown.Item>
                <Link to='/Resume'>
                  <div style={styles.menuButton}> 
                    Resume
                  </div>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to='/Contact'>
                  <div style={styles.menuButton}>
                    Contact Me!
                  </div>
                </Link>
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

const styles = {
  menuButton: {
    color: '#339989',
  },
  menuStyle: {
    borderRadius: '0px', 
    backgroundColor: '#131515',
    borderBottom: '1px solid #339989',
    fontFamily: 'FuturaPTLightOblique',
    width: '100vw',
  }
}

export default NavBar;
