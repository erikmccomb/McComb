import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' minHeight='100vh'>

        {/* Title box */}
        <Flexbox flexDirection='column' style={styles.titleBox}>
          <Flexbox style={{borderBottom: '2px solid #339989', padding: '0vw 3vw 0vw 3vw'}}>
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
          <Flexbox flexDirection='row' style={{width: '85vw'}}>
            <Flexbox flexDirection='column' style={{color: '#339989', padding: '40px 0px 50px 0px', }}>

              <Flexbox flexDirection='column' style={{color: '#339989', padding: '0px 0px 20px 0px', }}>
                <Flexbox>
                  <h3 style={{fontFamily: 'Verdana', color: '#131515',paddingBottom: '5px'}}>
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
                <Flexbox style={styles.text}>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Flexbox>
                <Flexbox style={styles.text}>
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
    lineHeight: 'calc(30px + 10vw)',
    color: '#7de2d1',
    padding: '15vh 0vh 15vh 0vh',
  },
  sub: {
    padding: '0vw 2vw 0vw 2vw',
  },
  subRow: {
    justifyContent: 'space-around', 
    overflow: 'hidden', 
    fontFamily: 'Calendas_Plus', 
    fontSize: 'calc(2px + 2vw)', 
    lineHeight: 'calc(2px + 2vw)',
    color: '#339989',
    
    paddingTop: '10px',
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
  text: {
    padding: '20px 20px 40px 20px', 
    textAlign: 'justify'
  },
}

export default Mccomb;
