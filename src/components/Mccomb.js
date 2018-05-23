import React from 'react'
import Flexbox from 'flexbox-react'
import Name from './MccombComponents/Name'
import About from './MccombComponents/About'
import Resume from './MccombComponents/Resume'
import Quote from './MccombComponents/Quote'

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox  flexDirection='column'>
        
        <div>
          <Name/>
        </div>

        <div>
          <About/>
        </div>

        <div>
          <Resume/>
        </div>

        <div>
          <Quote/>
        </div>

      </Flexbox>
    )
  }
}

export default Mccomb