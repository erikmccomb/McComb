// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';

// Sticky Footer
  const footerStyle = {
    color: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "5vh",
    minHeight: '40px',
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    height: "5vh",
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
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <NavBar />
      </div>
      <div style={{ backgroundColor: '#222222',}}>
        {children}
      </div>
      <div>
        <StickyFoot>
          <Footer/>
        </StickyFoot>
      </div>
    </div>
  )
}




export default PageLayout;
