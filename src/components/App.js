import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Flexbox from 'flexbox-react'

const App = () => (
  <Flexbox flexDirection='column' minHeight='100vh'>
    <Flexbox style={{width: '100vw',}}>
      <NavBar />
    </Flexbox>
    <Flexbox flexGrow={1}>
      <Main />
    </Flexbox>
  </Flexbox>
)

export default App