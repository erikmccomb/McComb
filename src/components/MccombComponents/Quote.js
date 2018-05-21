import React from 'react';
import '../../css/App.css';
import Flexbox from 'flexbox-react';

const Quote = () => {
  return (
    <Flexbox style={styles.descriptionBox}>
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
    minWidth: '400px',
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
    fontSize: '23px', 
    lineHeight: '23px',
  },
}

export default Quote;