import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import Name from './Name';
import About from './About';
import Resume from './Resume';
import Quote from './Quote';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox  flexDirection='column'>
        
        <div style={styles.nameStyle}>
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

const styles= {
  nameStyle: {
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '27vh 0vh 27vh 0vh'
  },
}

export default Mccomb;
