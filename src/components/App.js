import React from 'react'
import NavBar from './NavBar'
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
        minHeight='100vh' 
        maxWidth='100vw'
      >
        <Sidebar.Pushable as={Segment} style={{backgroundColor:'#131515'}}>
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
            style={{backgroundColor: '#339989', minHeight:'100vh',}}
          >
            <Menu.Item name='home'>
              <Link to='/' style={{color:'#131515'}}>
                <Icon name='home' size='big'/>
                <br/>
                McComb
              </Link>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Link to='/Portfolio' style={{color:'#131515'}}>
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
                >
                  <Icon name='github' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>

              <Menu.Item name='Linkedin' >
                <a href="https://www.linkedin.com/in/erikmccomb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name='linkedin' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>

              <Menu.Item name='Twitter' >
                <a href="https://twitter.com/Erik_the_Mick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name='twitter' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>

              <Menu.Item name='Instagram'>
                <a href="http://www.instagram.com/itserikwith_a_k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name='instagram' size='big' style={{color:'#131515'}} />
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Sidebar>

          <Sidebar.Pusher>
            <Icon link size='big' name='content' onClick={this.toggleVisibility} style={{padding:'10px', color: '#7de2d1'}} />
            <Flexbox  style={{minHeight:'100vh', overFlowY: 'scroll'}}>
              <Main/>
            </Flexbox>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Flexbox>
    )
  }
}

export default App