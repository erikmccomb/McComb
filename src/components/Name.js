import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';

const Name = () => {
  return (
    <Flexbox flexDirection='column' style={styles.titleBox}>
      <Flexbox className="fadeName" style={styles.nameContainer}>
        <div style={styles.titleName}> 
          McComb
        </div>
      </Flexbox>

      <Flexbox className="fadeSub" flexDirection='row' style={styles.subRow}>
        <Flexbox className="fadeOne" style={styles.sub}>
          <div style={{paddingRight: '4vw'}}>
            Graphic Design
          </div>
        </Flexbox>
        <Flexbox className="fadeTwo" style={styles.sub}>
          <div >
            Web Design & Developer
          </div>
        </Flexbox>
        <Flexbox className="fadeThree" style={styles.sub}>
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
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '27vh 0vh 27vh 0vh'
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
    justifyContent: 'space-between',
    overflow: 'hidden',
    minWidth: '43vw',
    fontFamily: 'Calendas_Plus',
    fontSize: 'calc(1px + 2vw)',
    lineHeight: 'calc(1px + 2vw)',
    color: '#339989',
    paddingTop: '10px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    borderTop: '2px solid #339989'
  },
}

export default Name;