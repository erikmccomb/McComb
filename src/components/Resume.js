import React from 'react';
import '../css/App.css';
import resume from '../files/resume.pdf';
import Flexbox from 'flexbox-react';

class Resume extends React.Component {
  render(){
    return (
      <Flexbox >
        <Flexbox >
          <Flexbox >

          </Flexbox>
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
