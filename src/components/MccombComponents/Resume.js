import React from 'react'
import Flexbox from 'flexbox-react'

class Resume extends React.Component {
  render(){
    return (
      <Flexbox 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center'
        style={{backgroundColor:'#131515',}}
        width='100vw'
        padding='100px'
      >
        <Flexbox 
          style={{
            fontFamily: 'FuturaPTBook', 
            fontSize:'45px', 
            margin:'0px 0px 25px', 
            color: '#7de2d1'
          }}
        >
          What I do
        </Flexbox>
        
        <Flexbox 
          flexDirection='column' 
          width='800px' 
          maxWidth='90vw' 
          alignItems='center' 
          justifyContent='center'
        >
          <div>
            <table style={{textAlign:'center', width:'400px', color: '#339989',}}>
              <tr>
                <td style={{width:'100px'}}>React JS</td>
                <td style={{width:'100px'}}>React Native</td>
                <td style={{width:'100px'}}>Javascript</td>
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

        <Flexbox 
          flexDirection='row' 
          margin='20px' 
          style={{ 
            textAlign:'center',
            fontFamily: 'FuturaPTBook', 
            fontSize:'14px'
          }}
        >
          <Flexbox 
            flexDirection='column' 
            width='300px' 
            maxWidth='45vw'
          >
            <div 
              style={{
                fontFamily: 'FuturaPTBook', 
                fontSize:'18px', 
                margin:'2px 0px 2px 0px', 
                color: '#7de2d1'
              }}
            >
              University of Utah
            </div>
            <div  style={{color: '#339989',}}>
              CS Bachelors (in-progress)
            </div>
            <div  style={{color: '#339989',}}>
              Pro-ed Certification (Completed)
            </div>
            <ul style={{textAlign:'left', color: '#339989',}}>
              <li>
                Android & iOS development, React Native
              </li>
              <li>
                React / Redux / React Router / Redux 
              </li>  
              <li>
                Bootstrap / Materalize / Semantic UI
              </li>
              <li>
                Ruby / Ruby Gems / Ruby on Rails / MVC
              </li>
              <li>
                NPM / Yarn
              </li>
            </ul>
          </Flexbox>

          <Flexbox 
          flexDirection='column' 
          width='300px' 
          maxWidth='45vw' 
          >
            <div 
              style={{
                fontFamily: 'FuturaPTBook', 
                fontSize:'18px', 
                margin:'2px 0px 2px 0px', 
                color: '#7de2d1'
              }}
            >
              Jordan Applied Technology Center
            </div>
            <div style={{color: '#339989',}}>
              Web Design Certification (Completed)
            </div>
            <div  style={{color: '#339989',}}>
              Graphic Design Introduction (Completed)
            </div>
            <ul style={{textAlign:'left', color: '#339989',}}>
              <li>
                Web Design Certification 
              </li>
              <li>
                Graphic Design Certification
              </li>
              <li>
                HTML / CSS / Javascript / Flash / Java 
              </li>
              <li>
                President of JATC Student Council
              </li>
            </ul>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Resume;