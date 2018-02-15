// Required by React
import React from 'react';
import { Link } from 'react-router-dom'
// Pre-styled Components
  import { Dropdown, Menu, Icon } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';


class Footer extends React.Component {
  //Handles the active page indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted size='mini' style={{ borderRadius: '0px', height: '5vh',}}>
        <div style={styles.buttonRow}>

          <div style={styles.button}>
            <a href="http://github.com/erikmccomb" 
              target="_blank" 
              style={{color: '#fefcfb'}}
            >
              <Icon name='github' size='big' />
            </a>
          </div>

          <div style={styles.button}>
            <a href="https://www.linkedin.com/in/erikmccomb/" 
              target="_blank" 
              style={{color: '#fefcfb'}}
            >
              <Icon name='linkedin' size='big' />
            </a>
          </div>

          <div style={styles.button}>
            <a href="https://twitter.com/Erik_the_Mick" 
              target="_blank" 
              style={{color: '#fefcfb'}}
            >
              <Icon name='twitter' size='big' />
            </a>
          </div>

          <div style={styles.button}>
            <a href="http://www.instagram.com/itserikwith_a_k/" 
              target="_blank" 
              style={{color: '#fefcfb'}}
            >
              <Icon name='instagram' size='big' />
            </a>
          </div>
        </div>
      </Menu>
    )
  }
}

const styles = {
  buttonRow: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: 'auto',
  },
  button: {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '15vw',
  }
}

export default Footer;
