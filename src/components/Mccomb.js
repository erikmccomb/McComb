import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import { Image } from 'semantic-ui-react';
import me from '../images/me.jpg';
import logo from '../images/logo.svg';
import Resume from './Resume';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox  flexDirection='column'>
      
        <Flexbox flexDirection='column' style={{width: '100vw',alignItems: 'center', justifyContent: 'center', padding: '27vh 0vh 27vh 0vh'}}>
          <Flexbox className="fadeName" style={{padding: '0vw 3vw 0vw 3vw', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{fontFamily: 'FuturaPTBook', fontSize: 'calc(30px + 10vw)', lineHeight: 'calc(30px + 10vw)', color: '#7de2d1'}}> 
              McComb
            </div>
          </Flexbox>

          <Flexbox className="fadeSub" flexDirection='row' style={styles.subRow}>
            <Flexbox className="fadeOne" style={styles.sub}>
              Graphic Design
            </Flexbox>
            <Flexbox className="fadeTwo" style={styles.sub}>
              Web Design & Developer
            </Flexbox>
            <Flexbox className="fadeThree" style={styles.sub}>
              QA Engineer
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox className="fadeRest"  style={styles.descriptionBox}>
          <Flexbox  flexDirection='row' style={{width: '75vw'}}>
            <Flexbox flexDirection='column' style={{color: '#339989', padding: '40px 0px 50px 0px', }}>

              <Flexbox className="fadeRest" flexDirection='column' style={{color: '#339989', padding: '0px 0px 20px 0px', }}>
                <Flexbox>
                  <h3 style={{fontFamily: 'Verdana', color: '#131515',paddingBottom: '5px', fontSize: 'calc(2px + 2vh)', lineHeight: 'calc(4px + 2vh)',}}>
                    Hello,  I'm Erik McComb
                  </h3>
                </Flexbox>
                <Flexbox>
                  <h5 style={{fontFamily: 'Calendas_Plus', color: '#339989', fontSize: 'calc(6px + 1vh)', lineHeight: 'calc(7px + 1vh)'}}>
                    Developer, Father, Popcorn Enthousiast
                  </h5>
                  
                </Flexbox>
              </Flexbox>
              
              <Flexbox className="fadeRest" flexDirection='row' style={{backgroundColor: '#2b2c28', color: '#fffafb', alignItems: 'center', justifyContent: 'center'}}>
                <Flexbox flexDirection='column' style={{margin:'15px 7.5px 15px 15px'}}>
                  <Flexbox flexDirection='column' style={{marginBottom: '15px', textAlign: 'justify', fontSize: 'calc(1px + 1vw)', lineHeight: 'calc(1px + 1vw)',}}>
                    <p>
                      I am a web designer & developer based in Salt Lake City, Utah. I'm experienced in the latest technologies, so I know how to build your site to run on any device you need to reach your audience. Responsive Design, ReactJS, HTML, CSS - I am a Front end developer looking to expand on what I know, and further grow as a developer.
                    </p>
                    <p>
                      My passion is UI/UX design and implementation. Improving overall customer experience by making it easier and more intuitive to use your site - That is my favorite job.
                    </p>
                    <p>
                      Here you will find my resume, a few links to social media, my blog, and some fun interactive projects. Click around, have some fun. Thanks for stopping by!
                    </p>
                  </Flexbox>
                  <Flexbox className="fadeRest" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image className="App-logo" src={logo} size='tiny'/>
                  </Flexbox>
                </Flexbox>
                <div className="fadeRest" style={styles.textRight}>
                  <Image src={me} size='huge' style={{padding: '15px 15px 15px 7.5px'}}/>
                </div>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>
        
        <Flexbox className="fadeRest" style={{width: '100vw'}}>
          <Resume/>
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
    
    padding: '15vh 0vh 15vh 0vh',
  },
  sub: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  subRow: {
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: '55vw',
    fontFamily: 'Calendas_Plus',
    fontSize: 'calc(1px + 2vw)',
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
