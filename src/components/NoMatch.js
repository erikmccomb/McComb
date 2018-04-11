// Required by React
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import lost from '../images/lost.jpg';

class NoMatch extends Component {
  render () {
    return (
      <div style={styles.flexContainer}>
        <Link style={{color: 'white'}} to='/'>
          <div style={styles.box}>
            <div style={styles.text}>
              <h1>404</h1>
              <div>
                "Not all who wander are lost", 
              </div>

              <div style={{paddingBottom: '10px'}}>
                but you definitely are.
              </div>
              
              <div>
                Click Here to take a shortcut back
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${lost})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100vw',
    minHeight: '94.5vh'
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(21, 60, 21, .8)',
    borderRadius: '7px',
    border: '1px solid white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  }
}

export default NoMatch
