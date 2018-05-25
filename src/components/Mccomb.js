import React from 'react'
import Flexbox from 'flexbox-react'
import Name from './MccombComponents/Name'
import About from './MccombComponents/About'
import Resume from './MccombComponents/Resume'


class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox 
        flexDirection='column' 
        justifyContent='center' 
        width='100vw' 
        maxWidth='100vw'
      >
        <Flexbox style={styles.ComponentStyle}>
          <Name/>
        </Flexbox>

        <Flexbox style={styles.ComponentStyle}>
          <About/>
        </Flexbox>

        <Flexbox style={styles.ComponentStyle}>
          <Resume/>
        </Flexbox>
      </Flexbox>
    )
  }
}

const styles={
  ComponentStyle: {
    justifyContent: 'center', 
    width: '100vw',
    maxWidth: '100vw',
  }
}
export default Mccomb