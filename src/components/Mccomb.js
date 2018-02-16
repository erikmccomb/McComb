import React from 'react';
import '../css/App.css';

class Mccomb extends React.Component {
  render(){
    return (
      <div style={styles.flexContainer}>
        <div style={styles.box}>
          <div style={styles.title}>
            Mccomb
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden', fontFamily: 'Muscat', fontSize: '3vw', lineHeight: '3vw'}}>
            <div style={{padding: '0vw 4vw 0vw 4vw'}}>
              Web Design
            </div>
            <div style={{padding: '0vw 4vw 0vw 4vw'}}>
              Graphic Design
            </div>
            <div style={{padding: '0vw 4vw 0vw 4vw'}}>
              Junior Developer
            </div>
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
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '50vh', 
    backgroundColor: '#058ed9',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  },
  title: {
    alignItems: 'center',
    color: '#f4e409',
    fontSize: 'calc(30px + 10vw)',
    lineHeight: 'calc(40px + 10vw)',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Hughs',
    width: '50%',
  },
}

export default Mccomb;
