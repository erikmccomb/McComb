import React from 'react';
import '../css/App.css';

class Contact extends React.Component {
  render(){
    return (
      <div style={{fontFamily: 'monofur'}}>
        <div style={styles.flexContainer}>
          <div style={styles.box}>
            <h1>Contact Component</h1>
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
    minHeight: '90vh',
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

export default Contact;
