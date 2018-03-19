// Required by React
  import React from 'react';
// Pre-styled Components
  import { Menu, Icon } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';


class Footer extends React.Component {
  render() {
    return (
      <Menu borderless size='mini' style={styles.buttonRow}>
        <Menu.Item style={styles.button} name='Github' >
          <a href="http://github.com/erikmccomb" target="_blank" rel="noopener noreferrer" >
            <Icon name='github' size='big' style={styles.icon} />
          </a>
        </Menu.Item>

        <Menu.Item style={styles.button} name='Linkedin' >
          <a href="https://www.linkedin.com/in/erikmccomb/" target="_blank" rel="noopener noreferrer">
            <Icon name='linkedin' size='big' style={styles.icon} />
          </a>
        </Menu.Item>

        <Menu.Item style={styles.button} name='Twitter' >
          <a href="https://twitter.com/Erik_the_Mick" target="_blank" rel="noopener noreferrer">
            <Icon name='twitter' size='big' style={styles.icon} />
          </a>
        </Menu.Item>

        <Menu.Item style={styles.button} name='Instagram'>
          <a href="http://www.instagram.com/itserikwith_a_k/" target="_blank" rel="noopener noreferrer">
            <Icon name='instagram' size='big' style={styles.icon} />
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}

const styles = {
  buttonRow: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: '0',
    padding: '0',
    backgroundColor: '#131515',
    borderRadius: '0px',
    borderTop: '1px solid #7de2d1',
    justifyContent: 'center',
    width: '100vw',
  },
  buttonBox:{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '15vw',
  },
  icon: {
    color: '#7de2d1'
  }
}

export default Footer;
