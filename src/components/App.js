import React from 'react'
import Main from './Main'
import Flexbox from 'flexbox-react'
import '../css/App.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Flexbox 
        flexDirection='column' 
        maxHeight='100vh'
        maxWidth='100vw'
      >
        <Sidebar.Pushable as={Segment} style={{backgroundColor:'#131515', borderRadius: '0px'}}>
          <Sidebar
            as={Menu}
            animation='slide along'
            width='thin'
            direction='left'
            visible={visible}
            icon='labeled'
            vertical
            inverted
            borderless
            style={{backgroundColor: '#339989', minHeight:'100vh', }}
          >
            <Menu.Item name='home'>
              <Link to='/' style={{color:'#131515'}} onClick={this.toggleVisibility}>
                <Icon name='home' size='big'/>
                <br/>
                McComb
              </Link>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Link to='/Portfolio' style={{color:'#131515'}} onClick={this.toggleVisibility}>
                <Icon name='file code outline' size='big'/>
                <br/>
                Portfolio
              </Link>
            </Menu.Item>

            <Menu.Menu position='bottom'>
              <Menu.Item name='Github' >
                <a href="http://github.com/erikmccomb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={this.toggleVisibility}
                >
                  <Icon name='github' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>

              <Menu.Item name='Linkedin' >
                <a href="https://www.linkedin.com/in/erikmccomb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={this.toggleVisibility}
                >
                  <Icon name='linkedin' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>

              <Menu.Item name='Instagram'>
                <a href="http://www.instagram.com/itserikwith_a_k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={this.toggleVisibility}
                >
                  <Icon name='instagram' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Sidebar>

          <Sidebar.Pusher>
            <Icon link size='big' name='content' onClick={this.toggleVisibility} style={{padding:'10px', color: '#7de2d1'}} />
            <Flexbox  style={{minHeight:'97vh', overFlowY: 'scroll'}}>
              <Main/>
            </Flexbox>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Flexbox>
    )
  }
}

export default App