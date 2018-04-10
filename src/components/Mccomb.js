import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import Name from './Name';
import About from './About';
import Resume from './Resume';
import Quote from './Quote';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox  flexDirection='column'>
        
        <div>
          <Name/>
        </div>

        <div className="fadeRest">
          <About/>
        </div>

        <div className="fadeRest">
          <Resume/>
        </div>

        <div>
          <Quote/>
        </div>

      </Flexbox>
    )
  }
}

export default Mccomb;
