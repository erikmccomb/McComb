// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';
  import '../css/App.css';

const PageLayout = ({children, ...rest}) => {
  return (
    <Flexbox flexDirection="column">

      <Flexbox height="5vh" style={{overflow: "hidden"}}>
        <div className="fadeRest">
          <NavBar/>
        </div>
      </Flexbox>
      
      <Flexbox height="90vh" style={{overflow: "scroll"}}>
        {children}
      </Flexbox>
      
      <Flexbox height="5vh" style={{overflow: "hidden"}}>
        <div className="fadeRest">
          <Footer/>
        </div>
      </Flexbox>

    </Flexbox>
  )
}

export default PageLayout;
