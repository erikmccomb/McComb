import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' minHeight='100vh'>

        {/* Title box */}
        <Flexbox flexDirection='column' style={styles.titleBox}>
          <Flexbox>
            McComb   
          </Flexbox>
          <Flexbox flexDirection='row' style={styles.subRow}>
            <Flexbox style={styles.sub}>
              Web Design
            </Flexbox>
            <Flexbox style={styles.sub}>
              Graphic Design
            </Flexbox>
            <Flexbox style={styles.sub}>
              Junior Developer
            </Flexbox>
          </Flexbox>
        </Flexbox>

      {/* Paragraph Box */}
        <Flexbox style={styles.descriptionBox}>
          <Flexbox flexDirection='row' style={{width: '75vw'}}>
            <Flexbox flexDirection='column' style={{color: '#339989', padding: '40px', }}>

              <Flexbox flexDirection='column' style={{color: '#339989', padding: '10px 10px 10px 20px', }}>
                <Flexbox>
                  <h3 style={{fontFamily: 'Verdana', color: '#131515'}}>
                    Hello,  I'm Erik McComb
                  </h3>
                </Flexbox>
                <Flexbox>
                  <h5 style={{fontFamily: 'Calendas_Plus', color: '#339989'}}>
                  Father, Developer, Oddball
                  </h5>
                  
                </Flexbox>
              </Flexbox>
              
              <Flexbox  flexDirection='row' style={{backgroundColor: '#2b2c28', color: '#fffafb'}}>
                <Flexbox style={{padding: '20px 20px 40px 20px '}}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Flexbox>
                <Flexbox style={{padding: '20px 20px 40px 20px '}}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox style={styles.photoBox}>

        </Flexbox>

      </Flexbox>
    )
  }
}

const styles = {
  titleBox: {
    width: '100vw',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 'auto', 
    backgroundColor: '#131515',
    fontFamily: 'FuturaPTBook',
    fontSize: 'calc(30px + 10vw)',
    lineHeight: 'calc(40px + 10vw)',
    color: '#7de2d1',
    padding: '15vh 0vh 15vh 0vh',
  },
  sub: {
    padding: '0vw 4vw 0vw 4vw',
  },
  subRow: {
    justifyContent: 'space-around', 
    overflow: 'hidden', 
    fontFamily: 'Calendas_Plus', 
    fontSize: 'calc(2px + 2vw)', 
    lineHeight: 'calc(2px + 2vw)',
    color: '#339989',
  },
  descriptionBox: {
    backgroundColor: '#fffafb',
    height: 'auto',
    justifyContent: 'center',
  },
  photoBox: {
    backgroundColor: '#131515',
    height: '50vh', 
  },
}

export default Mccomb;
