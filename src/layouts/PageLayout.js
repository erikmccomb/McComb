// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';

// Sticky Footer
  const footerStyle = {
    backgroundColor: "#131515",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    height: "5vh",
    minHeight: '40px',
    width: "100%"
  };
  
  function StickyFoot({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
    );
  }
// End Sticky Footer


const PageLayout = ({children, ...rest}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox>
        <NavBar />
      </Flexbox>
      <Flexbox flexGrow={1}>
        {children}
      </Flexbox>
      <Flexbox>
        <StickyFoot>
          <Footer/>
        </StickyFoot>
      </Flexbox>
    </Flexbox>
  )
}

export default PageLayout;
