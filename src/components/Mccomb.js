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
          <div style={styles.subRow}>
            <div style={styles.subtitle}>
              Web Design
            </div>
            <div style={styles.subtitle}>
              Graphic Design
            </div>
            <div style={styles.subtitle}>
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
  subtitle: {
    padding: '0vw 4vw 0vw 4vw'
  },
  subRow: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    overflow: 'hidden', 
    fontFamily: 'Muscat', 
    fontSize: 'calc(15px + 2vw)', 
    lineHeight: 'calc(15px + 2vw)'
  },
}

export default Mccomb;
