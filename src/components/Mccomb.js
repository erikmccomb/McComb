import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import { Image } from 'semantic-ui-react';
import me from '../images/me.jpg';
import logo from '../images/logo.svg';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox  flexDirection='column' minHeight='100vh'>
        {/* Title box */}
        <Flexbox flexDirection='column' style={styles.titleBox}>
          <Flexbox className="fadeName" style={{ padding: '0vw 3vw 0vw 3vw'}}>
            McComb
          </Flexbox>
          <Flexbox className="fadeSub" flexDirection='row' style={styles.subRow}>
            <Flexbox className="fadeOne" style={styles.sub}>
              Web Design
            </Flexbox>
            <Flexbox className="fadeTwo" style={styles.sub}>
              Graphic Design
            </Flexbox>
            <Flexbox className="fadeThree" style={styles.sub}>
              Junior Developer
            </Flexbox>
          </Flexbox>
        </Flexbox>

      {/* Paragraph Box */}
        <Flexbox className="fadeRest"  style={styles.descriptionBox}>
          <Flexbox  flexDirection='row' style={{width: '50vw'}}>
            <Flexbox flexDirection='column' style={{color: '#339989', padding: '40px 0px 50px 0px', }}>

              <Flexbox className="fadeRest" flexDirection='column' style={{color: '#339989', padding: '0px 0px 20px 0px', }}>
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
              
              <Flexbox className="fadeRest" flexDirection='row' style={{backgroundColor: '#2b2c28', color: '#fffafb', alignItems: 'center', justifyContent: 'center'}}>
                <Flexbox flexDirection='column' style={{margin:'15px 7.5px 15px 15px'}}>
                  <Flexbox style={{marginBottom: '15px', textAlign: 'justify'}}>
                    <p>
                      Welcome to My Resume Website and Portfolio! I am a ReactJS focused web developer at the junior level, and I aspire to become a professional web developer. I have two years total developer experience, with an additional half a year of formal education in React development. This site, though just a resume site, is built in React and will be a continuing work in progress. 
                    </p>
                  </Flexbox>
                  <Flexbox style={{marginTop: '15px', textAlign: 'justify'}}>
                    <p>
                      Here you will find my resume, links to social media, my blog, and some fun interactive projects not necessarily built in React (including a game!). Click around, have some fun, even see what it looks like on your phone's web browser. Thank you very much for visiting!
                    </p>
                  </Flexbox>
                  <Flexbox className="fadeRest" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image className="App-logo" src={logo} size='tiny'/>
                  </Flexbox>
                </Flexbox>
                <Flexbox className="fadeRest" style={styles.textRight}>
                  <Image src={me} size='large' style={{margin: '15px 15px 15px 7.5px'}}/>
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
    borderTop: '2px solid #339989',
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
    padding: '10px 10px 10px 10px', 
    textAlign: 'justify'
  },
  textLeft: { 
    textAlign: 'justify'
  },
  textRight: {
    textAlign: 'justify'
  },
}

export default Mccomb;
