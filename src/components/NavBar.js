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
      <Menu size='mini' style={{ borderRadius: '0px', height: '5vh' }}>
        <Menu.Item 
          name='McComb' 
          active={activeItem === 'McComb'} 
          onClick={this.handleItemClick} 
        />
        <Menu.Item 
          name='Portfolio' 
          active={activeItem === 'Portfolio'} 
          onClick={this.handleItemClick} 
        />
        <Menu.Menu position='right'>
          <Dropdown item text='+ More'>
            <Dropdown.Menu>
              <Dropdown.Item>Resume</Dropdown.Item>
              <Dropdown.Item>Contact Me!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
