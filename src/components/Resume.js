import React from 'react';
import '../css/App.css';

class Resume extends React.Component {
  render(){
    return (
      <div style={{fontFamily: 'FuturaPTBook'}}>
        <div style={styles.flexContainer}>
          <div style={styles.box}>
            <h1>Resume Component</h1>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  }
}

export default Resume;
