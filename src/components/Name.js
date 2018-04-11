import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';

const Name = () => {
  return (
    <Flexbox flexDirection='column' style={styles.titleBox}>
      <Flexbox  style={styles.nameContainer}>
        <div style={styles.titleName}> 
          McComb
        </div>
      </Flexbox>

      <Flexbox flexDirection='row' style={styles.subRow}>
        <Flexbox style={styles.sub}>
          <div style={{paddingRight: '4vw'}}>
            Graphic Design
          </div>
        </Flexbox>
        <Flexbox style={styles.sub}>
          <div >
            Web Design & Developer
          </div>
        </Flexbox>
        <Flexbox style={styles.sub}>
          <div style={{paddingLeft: '4vw'}}>
            QA Engineer
          </div>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
} 

const styles = {
  titleBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleName: {
    fontFamily: 'FuturaPTBook',
    fontSize: 'calc(30px + 10vw)',
    lineHeight: 'calc(30px + 10vw)',
    color: '#7de2d1',
    padding: '0vw 3vw 0vw 3vw'
  },
  nameContainer: {
    padding: '0vw 3vw 0vw 3vw',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sub: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  subRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    minWidth: '50vw',
    maxWidth: '55vw',
    fontFamily: 'Calendas_Plus',
    fontSize: 'calc(10px + 1vw)',
    lineHeight: 'calc(10px + 1vw)',
    color: '#339989',
    paddingTop: '10px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    borderTop: '2px solid #339989'
  },
}

export default Name;