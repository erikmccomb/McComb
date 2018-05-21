import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import Name from './MccombComponents/Name';
import { Link } from 'react-router-dom';

class Mccomb extends React.Component {
  render(){
    return (
      <Flexbox className="fadeName" flexDirection='column'>
        <div style={{width: '100vw', backgroundColor: 'rgb(19, 21, 21, 0.8)', minHeight: '30vh'}}>
          <Name/>
          <div>
            <Link to='/McComb'>
              <Flexbox style={{fontSize: '30px', color: 'white', alignItems: 'center', justifyContent: 'center', padding: '30px', fontFamily: 'FuturaPTLightOblique',}}>
                Enter
              </Flexbox>
            </Link>
          </div>
        </div>
      </Flexbox>
    )
  }
}

export default Mccomb;
