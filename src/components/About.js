import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import { Image } from 'semantic-ui-react';
import me from '../images/me.jpg';
import logo from '../images/logo.svg';

const About = () => {
  return (
    <Flexbox className="fadeRest"  style={styles.descriptionBox}>
      <Flexbox  flexDirection='row' style={styles.rowBox}>
        <Flexbox flexDirection='column' style={styles.colBox}>

          <Flexbox flexDirection='column' style={styles.nameContainer}>
            <Flexbox>
              <h3 style={styles.hello}>
                Hello,  I'm Erik McComb
              </h3>
            </Flexbox>
            <Flexbox>
              <h5 style={styles.myDescription}>
                Developer, Father, Popcorn Enthousiast
              </h5>
              
            </Flexbox>
          </Flexbox>
          
          <Flexbox flexDirection='row' style={styles.paragraphBox}>
            <Flexbox flexDirection='column' style={{margin:'15px 7.5px 15px 15px'}}>

              <Flexbox flexDirection='column' style={{marginBottom: '30px', textAlign: 'justify', fontSize: '18px', maxWidth: '600px', fontFamily: 'FuturaPTLightOblique',}}>
                <p>
                  I am a web designer & developer based in Salt Lake City, Utah. I'm experienced in the latest technologies, so I know how to build your site to run on any device needed to reach your audience. React JS, React Native, Javascript, HTML, CSS - I am a Front end developer looking to expand on what I know, and further grow as a developer.
                </p>
                <p>
                  My passion is UI/UX design and implementation. Improving overall customer experience by making it easier and more intuitive to use your site - That is my favorite task.
                </p>
                <p>
                  Click around, have some fun. Thanks for stopping by!
                </p>
              </Flexbox>

              <Flexbox style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image className="App-logo" src={logo} size='tiny'/>
              </Flexbox>

            </Flexbox>
            <div style={{maxWidth: '400px', padding: '10px'}}>
              <Image src={me} size='large'/>
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

const styles = {
  textRight: {
    textAlign: 'justify'
  },
  descriptionBox: {
    backgroundColor: '#fffafb',
    height: 'auto',
    justifyContent: 'center',
  },
  rowBox: {
    width: '75vw',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  colBox: {
    color: '#339989', 
    padding: '40px 0px 50px 0px', 
  },
  nameContainer: {
    color: '#339989', 
    padding: '0px 0px 20px 0px',
  },
  hello: {
    fontFamily: 'Verdana', 
    color: '#131515',
    paddingBottom: '5px', 
    fontSize: 'calc(2px + 2vh)', 
    lineHeight: 'calc(4px + 2vh)',
  },
  myDescription: {
    fontFamily: 'Calendas_Plus',
    color: '#339989',
    fontSize: 'calc(6px + 1vh)',
    lineHeight: 'calc(7px + 1vh)'
  },
  paragraphBox: {
    backgroundColor: '#2b2c28', 
    color: '#fffafb', 
    alignItems: 'center', 
    justifyContent: 'center', 
    maxWidth: '1000px'
  }
}

export default About;