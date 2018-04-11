import React from 'react';
import '../../css/App.css';
import Flexbox from 'flexbox-react';

class Resume extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' style={styles.flexContainer}>
        <Flexbox style={styles.titleName}>
          Resume
        </Flexbox>
        
        <Flexbox flexDirection='column' style={styles.sectionBox}>
          <div style={styles.sectionTitle}>
            Skills & Qualifications
          </div>

          <div>
            <table style={styles.skillsTable}>
              <tr>
                <td style={styles.skillsColumn}>React JS</td>
                <td style={styles.skillsColumn}>React Native</td>
                <td style={styles.skillsColumn}>Javascript</td>
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
                <td>Illustrator</td>
                <td>Photoshop</td>
                <td>API</td>
              </tr>
              <tr>
                <td>SCRUM</td>
                <td>Asana</td>
                <td>Trello</td>
              </tr>
            </table>
          </div>
        </Flexbox>


        <Flexbox flexDirection='column' style={styles.sectionBox}>
          <div style={styles.sectionTitle}>
            Developer History
          </div>
        </Flexbox>

        <Flexbox flexDirection='column' style={{marginTop: '7px', marginBottom: '7px', backgroundColor: 'rgb(255, 250, 251, 0.3)', width: '35vw', overflow: 'hidden', minWidth: '300px'}}>
          <table style={{fontSize: '16px', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <tr>
              <td style={styles.jobTitle}>Atlas Design</td>
              <td style={{textAlign: 'right'}}>August 2017 - Present</td>
            </tr>
            <tr>Developer</tr>
          </table>
          
          <table>
            <tr>
              <td>
                <ul>
                  <li>
                    Personal web design & graphic design projects
                  </li>
                
                  <li>
                    Customers from across the USA for basic and complex sites
                  </li>
                
                  <li>
                    HTML, CSS, Javascript, React JS
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </Flexbox>

        <Flexbox flexDirection='column' style={{marginTop: '7px', marginBottom: '7px', backgroundColor: 'rgb(255, 250, 251, 0.3)', width: '35vw', overflow: 'hidden', minWidth: '300px'}}>
          <table style={{ fontSize: '16px', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <tr>
              <td style={styles.jobTitle}> Slope App Studio </td>
              <td style={{textAlign: 'right'}}>October 2017 - January 2018</td>
            </tr>
            <tr>Developer</tr>
          </table>
          <table>
            <tr>
              <td>
                <ul>
                  <li>
                    Consumed and stored data from third-party API
                  </li>
                
                  <li>
                    React front-end with full C.R.U.D. action support.
                  </li>
                
                  <li>
                    Utilized Redux with React to create a controlled flow of data
                  </li>
                  
                  <li>
                    Led S.C.R.U.M. meetings with team of 5 as Scrum master.
                  </li>

                  <li>
                    Used Trello and Asana to create and track progress of tasks.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </Flexbox>

        <Flexbox flexDirection='column' style={{marginTop: '7px', marginBottom: '7px', backgroundColor: 'rgb(255, 250, 251, 0.3)', width: '35vw', overflow: 'hidden', minWidth: '300px'}}>
          <table style={{ fontSize: '16px', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <tr>
              <td style={styles.jobTitle}> Dev Point Studio</td>
              <td style={{textAlign: 'right'}}>August 2017 - October 2017</td>
            </tr>
            <tr>Junior Developer</tr>
          </table>

          <table>
            <tr>
              <td>
                <ul>
                  <li>
                    Android and iOS app development in React Native
                  </li>
                
                  <li>
                    Designed the UX/UI for mobile application
                  </li>
                
                  <li>
                    Implemented Stack Navigation
                  </li>
                  
                  <li>
                    Translated React components into React Native
                  </li>
                  
                </ul>
              </td>
            </tr>
          </table>
        </Flexbox>

        <Flexbox flexDirection='column' style={styles.sectionBox}>
          <div style={styles.sectionTitle}>
            Education
          </div>
        </Flexbox>

        <Flexbox flexDirection='row'>
          <Flexbox flexDirection='column' style={{marginTop: '7px', marginBottom: '7px', backgroundColor: 'rgb(255, 250, 251, 0.3)', width: '25vw', overflow: 'hidden', margin: '5px', minWidth: '180px'}}>
            <table style={{ fontSize: '16px', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
              <tr>
                <td style={styles.jobTitle}> University of Utah</td>
              </tr>
              <tr>Computer Science (Bachelors, in-progress)</tr>
              <tr>Pro-ed Certification (Computer Science, Completed)</tr>
            </table>

            <table>
              <tr>
                <td>
                  <ul>
                    <li>
                      Android & iOS app development in React Native
                    </li>
                  
                    <li>
                      React / Redux / React Router / Redux / JavaScript
                    </li>
                  
                    <li>
                      Bootstrap / Materalize / Semantic UI
                    </li>
                    
                    <li>
                      Ruby / Ruby Gems / Ruby on Rails / MVC
                    </li>

                    <li>
                      Package Managers - NPM, Yarn
                    </li>
                    
                  </ul>
                </td>
              </tr>
            </table>
          </Flexbox>

          <Flexbox  flexDirection='column' style={{marginTop: '7px', marginBottom: '7px', backgroundColor: 'rgb(255, 250, 251, 0.3)', width: '25vw', overflow: 'hidden',  margin: '5px', minWidth: '180px'}}>
            <table style={{ fontSize: '16px', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
              <tr>
                <td style={styles.jobTitle}> Jordan Applied Technology Center</td>
              </tr>
              <tr>Web Design Certification (Completed)</tr>
              <tr>Graphic Design Introduction (Completed)</tr>
            </table>

            <table>
              <tr>
                <td>
                  <ul>
                    <li>
                      Web Design Certification 
                    </li>
                    <li>
                      Graphic Design Certification
                    </li>
                    <li>
                      Computer programming introduction
                    </li>
                    <li>
                      HTML, CSS, Javascript, Flash, Java 
                    </li>
                    <li>
                      President of JATC Student Council
                    </li>
                 </ul>
                </td>
              </tr>
            </table>
          </Flexbox>
        </Flexbox>
        
      </Flexbox>
    )
  }
}

const styles = {
  flexContainer: {
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5vh 0vh 5vh 0vh'
  },
  titleName: {
    fontFamily: 'FuturaPTBook', 
    fontSize: '45px', 
    lineHeight: '45px', 
    color: '#7de2d1', 
    borderBottom: '2px solid #339989',  
    padding: '0vw 3vw 0vw 3vw', 
    alignItems: 'center', 
  },
  sectionBox: {
    width: '55vw',
    alignItems: 'center',
  },
  skillsTable: {
    fontFamily: 'FuturaPTLightOblique',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '100',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '40vw',
    minWidth: '400px',
    fontSize: '17px',
  },
  sectionTitle: {
    fontFamily: 'FuturaPTBook',
    fontSize: '30px',
    lineHeight: '30px',
    color: '#7de2d1',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '10px'
  },
  skillsColumn: {
    width: '33.3%'
  },
  jobTitle: {
    fontFamily: 'FuturaPTBook',
    fontSize: '20px',
    lineHeight: '20px',
    color: '#7de2d1',
    textAlign: 'left',
    marginTop: '20px',
    marginBottom: '10px'
  }
}


export default Resume;
