// Required by React
import React from 'react';
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
            <Icon name='github' size='big' />
          </div>
          <div style={styles.button}>
            <Icon name='twitter' size='big' />
          </div>
          <div style={styles.button}>
            <Icon name='linkedin' size='big' />
          </div>
          <div style={styles.button}>
            <Icon name='instagram' size='big' />
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
    width: '80vw',
  },
  button: {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '20vw',
  }
}

export default Footer;
