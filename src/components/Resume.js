import React from 'react';
import '../css/App.css';
import resume from '../files/resume.pdf';
import Flexbox from 'flexbox-react';

class Resume extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' style={{width: '100vw',alignItems: 'center', justifyContent: 'center', padding: '5vh 0vh 5vh 0vh'}}>
        <Flexbox style={{padding: '0vw 3vw 0vw 3vw', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{fontFamily: 'FuturaPTBook', fontSize: 'calc(10px + 4vw)', lineHeight: 'calc(10px + 4vw)', color: '#7de2d1', borderBottom: '2px solid #339989', marginBottom: '1vh'}}> 
            Resume
          </div>
        </Flexbox>
        
        <Flexbox flexDirection='column' style={{width: '55vw'}}>
          <div style={{fontFamily: 'FuturaPTBook', fontSize: 'calc(10px + 1vw)', lineHeight: 'calc(10px + 1vw)', color: '#7de2d1', textAlign: 'center', marginTop: '20px', marginBottom: '10px'}}>
            Skills & Qualifications
          </div>
          <div>
            <table style={{fontFamily: 'FuturaPTBook', textAlign: 'center', width: '100%'}}>
              <tr>
                <td style={{width: '33.3%'}}>ReactJS</td>
                <td style={{width: '33.3%'}}>React Native</td>
                <td style={{width: '33.3%'}}>Javascript</td>
              </tr>
              <tr>
                <td>React Redux</td>
                <td>React Router</td>
                <td>Ruby</td>
              </tr>
              <tr>
                <td>Ruby on Rails</td>
                <td>PostgreSQL</td>
                <td>Git</td>
              </tr>
              <tr>
                <td>Adobe Photoshop</td>
                <td>Adobe Illustrator</td>
                <td>API</td>
              </tr>
              <tr>
                <td>Trello</td>
                <td>Asana</td>
                <td>SCRUM</td>
              </tr>
            </table>
          </div>
        </Flexbox>
      </Flexbox>
    )
  }
}

const styles = {
  flexContainer: {
  },
  box: {
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  }
}

export default Resume;
