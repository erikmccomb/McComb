// Required by React
  import React from 'react';
// Pre-styled Components
  import { Dropdown, Menu } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';


class NavBar extends React.Component {
  //Handles the active page indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu 
        size='mini' 
        style={{ 
          borderRadius: '0px', 
          height: '5vh', 
          backgroundColor: 'fefcfb',
        }}
      >
        <Menu.Item 
          name='McComb' 
          active={activeItem === 'McComb'} 
          onClick={this.handleItemClick} 
          style={{color: '#f17300'}}
        />
        <Menu.Item 
          name='Portfolio' 
          active={activeItem === 'Portfolio'} 
          onClick={this.handleItemClick} 
          style={{color: '#f17300'}}
        />
        <Menu.Menu 
          position='right' 
          style={{color: '#f17300'}}
        >
          <Dropdown 
            item text='+ More' 
            style={{color: '#f17300'}}
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <div style={{color: '#f17300'}}> 
                  Resume
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div style={{color: '#f17300'}}>
                  Contact Me!
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
