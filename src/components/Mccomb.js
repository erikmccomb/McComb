import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import Name from './MccombComponents/Name';
import About from './MccombComponents/About';
import Resume from './MccombComponents/Resume';
import Quote from './MccombComponents/Quote';

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
