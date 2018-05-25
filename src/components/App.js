import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Flexbox from 'flexbox-react'
import '../css/App.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

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
        style={{backgroundColor:'#131515'}}
      >
        <Sidebar.Pushable as={Segment} style={{backgroundColor:'#131515'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Icon link size='big' name='content' onClick={this.toggleVisibility} style={{padding:'10px', color: '#7de2d1'}} />
            <Flexbox>
              <Main/>
            </Flexbox>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Flexbox>
    )
  }
}

export default App