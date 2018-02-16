// Required by React
  import React from 'react';
// Pre-styled Components
  import { Menu, Icon } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';


class Footer extends React.Component {
  //Handles the active page indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu 
        borderless 
        size='mini' 
        style={{ 
          borderRadius: '0px', 
          minHeight: '40px',
          borderTop: '1px solid #054a91',
        }}
      >
        <div style={styles.buttonRow}>

          <Menu.Item 
            style={styles.button} 
            name='Github' 
            active={activeItem === 'Github'}
          >
            <a href="http://github.com/erikmccomb" 
              target="_blank"
              rel="noopener noreferrer" 
            >
              <Icon name='github' size='big' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item 
            style={styles.button}
            name='Linkedin' 
            active={activeItem === 'Linkedin'}
          >
            <a href="https://www.linkedin.com/in/erikmccomb/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon name='linkedin' size='big' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item 
            style={styles.button}
            name='Twitter' 
            active={activeItem === 'Twitter'}
          >
            <a href="https://twitter.com/Erik_the_Mick" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon name='twitter' size='big' style={styles.icon} />
            </a>
          </Menu.Item>

          <Menu.Item 
            style={styles.button}
            name='Instagram' 
            active={activeItem === 'Instagram'}
          >
            <a href="http://www.instagram.com/itserikwith_a_k/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon name='instagram' size='big' style={styles.icon} />
            </a>
          </Menu.Item>
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
  },
  icon: {
    color: '#054a91'
  }
}

export default Footer;
