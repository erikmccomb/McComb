// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';
  import '../css/App.css';

const PageLayout = ({children}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox element="header" height='5.5vh' className="fadeRest">
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
