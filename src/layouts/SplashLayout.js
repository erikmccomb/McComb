// Required by React
import React from 'react';
import splash from '../images/arch_splash.jpg';
import Flexbox from 'flexbox-react';
import '../css/App.css';

const SplashLayout = ({children}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh" style={styles.flexContainer}>
      {children}
    </Flexbox>
  )
}


const styles = {
flexContainer: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${splash})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  width: '100vw',
  minHeight: '100vh'
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

export default SplashLayout;
