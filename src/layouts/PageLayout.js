// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';
  import '../css/App.css';

const PageLayout = ({children, ...rest}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox element="header" height='4.5vh' className="fadeRest">
        <NavBar/>
      </Flexbox>

      <Flexbox className='bodyScroll' height='91vh'>
        <div  style={{overflow: "auto", width: '100vw'}}>
          {children}
        </div>
      </Flexbox>

      <Flexbox element="footer" height='4.5vh' className="fadeRest">
        <Footer/>
      </Flexbox>
    </Flexbox>
  )
}

export default PageLayout;
