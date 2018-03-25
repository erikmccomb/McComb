import React from 'react';
import '../css/App.css';
import resume from '../files/resume.pdf';
import Flexbox from 'flexbox-react';

class Resume extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' style={{width: '100vw',alignItems: 'center', justifyContent: 'center', padding: '5vh 0vh 5vh 0vh'}}>
        <Flexbox style={{padding: '0vw 3vw 0vw 3vw', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{fontFamily: 'FuturaPTBook', fontSize: 'calc(10px + 4vw)', lineHeight: 'calc(10px + 4vw)', color: '#7de2d1', borderBottom: '2px solid #339989'}}> 
            Resume
          </div>
        </Flexbox>
        
        <Flexbox>
          
        </Flexbox>
      </Flexbox>
    )
  }
}

const styles = {
  flexContainer: {
  },
  box: {
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  }
}

export default Resume;
