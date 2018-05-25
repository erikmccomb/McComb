import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Flexbox from 'flexbox-react'
import '../css/App.css'

const App = () => (
  <Flexbox 
    flexDirection='column' 
    minHeight='100vh' 
    maxWidth='100vw'
  >
    <Flexbox>
      <NavBar />
    </Flexbox>
    <Flexbox flexGrow={1}>
      <Main />
    </Flexbox>
  </Flexbox>
)

export default App