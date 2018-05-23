import React from 'react'
import Flexbox from 'flexbox-react'

class Resume extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column'>
        <Flexbox>
          Resume
        </Flexbox>
        
        <Flexbox flexDirection='column'>
          <div>
            Skills & Qualifications
          </div>

          <div>
            <table>
              <tr>
                <td>React JS</td>
                <td>React Native</td>
                <td>Javascript</td>
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


        <Flexbox flexDirection='column'>
          <div>
            Developer History
          </div>
        </Flexbox>

        <Flexbox flexDirection='column' >
          <table>
            <tr>
              <td>Atlas Design</td>
              <td>August 2017 - Present</td>
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

        <Flexbox>
          <table >
            <tr>
              <td> Slope App Studio </td>
              <td>October 2017 - January 2018</td>
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

        <Flexbox>
          <table>
            <tr>
              <td>Dev Point Studio</td>
              <td>August 2017 - October 2017</td>
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

        <Flexbox flexDirection='column'>
          <div>
            Education
          </div>
        </Flexbox>

        <Flexbox flexDirection='row'>
          <Flexbox flexDirection='column'>
            <table>
              <tr>
                <td> University of Utah</td>
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

          <Flexbox>
            <table>
              <tr>
                <td> Jordan Applied Technology Center</td>
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

export default Resume;