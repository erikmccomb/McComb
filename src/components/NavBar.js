// Required by React
  import React from 'react';
// Pre-styled Components
  import { Dropdown, Menu } from 'semantic-ui-react';
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

        <Link to='/Blog'>
          <Menu.Item 
            name='Blog' 
            style={styles.menuButton}
          >
            Blog
          </Menu.Item>
        </Link>

        <Menu.Menu position='right' style={styles.menuButton}>
          <Dropdown item text='+ More' style={styles.menuButton}>
            <Dropdown.Menu style={{    
              fontFamily: 'FuturaPTLightOblique',
              fontSize: '16px',
              flexDirection: 'row', 
              alignItems: 'center', 
              margin: '0',
              padding: '0',
              backgroundColor: '#7de2d1',
              borderBottom: '1px solid #131515',
              justifyContent: 'center'
            }}>
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
    color: '#131515',
  },
  menuStyle: {
    fontFamily: 'FuturaPTLightOblique',
    fontSize: '16px',
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: '0',
    padding: '0',
    backgroundColor: '#7de2d1',
    borderRadius: '0px',
    borderBottom: '1px solid #131515',
    justifyContent: 'center',
    width: '100vw',
  }
}

export default NavBar;
