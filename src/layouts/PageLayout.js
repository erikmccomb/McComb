import React from 'react';
import NavBar from '../components/NavBar';
import Flexbox from 'flexbox-react';
import '../css/App.css';

const PageLayout = ({children}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox element="header" height='5.5vh'>
        <NavBar/>
      </Flexbox>

      <Flexbox className='bodyScroll' height='94.5vh'>
        <div  style={{overflow: "auto", width: '100vw'}}>
          {children}
        </div>
      </Flexbox>
    </Flexbox>
  )
}

export default PageLayout;
