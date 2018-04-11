import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import { Image } from 'semantic-ui-react';
import me from '../images/me.jpg';
import logo from '../images/logo.svg';

const Quote = () => {
  return (
    <Flexbox className="fadeRest"  style={styles.descriptionBox}>
      <Flexbox  flexDirection='row' style={styles.rowBox}>
        <Flexbox flexDirection='column' style={styles.colBox}>
          <Flexbox flexDirection='column' style={styles.nameContainer}>
              <div style={styles.hello}>
              "Erik is a hard worker who has the natural talent needed to be an amazing developer. I would highly recommend Erik."
              </div>
              <div style= {{textAlign: 'right', fontSize: '20px'}}>
              - Kris Trujillo
              </div>
              <div style= {{textAlign: 'right'}}>
              CTO @ Civitech Pro
              </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

const styles = {
  descriptionBox: {
    backgroundColor: '#fffafb',
    height: 'auto',
    justifyContent: 'center',
    paddingTop: '30px',
  },
  rowBox: {
    width: '50vw',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  colBox: {
    color: '#339989', 
  },
  nameContainer: {
    color: '#339989', 
    padding: '50px',
  },
  hello: {
    fontFamily: 'Verdana', 
    color: '#131515',
    paddingBottom: '5px', 
    fontSize: 'calc(5px + 1vw)', 
    lineHeight: 'calc(10px + 1vw)',
  },
}

export default Quote;