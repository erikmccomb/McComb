// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';

  function StickyFoot({ children }) {
    return (
      <div>
        <div style={styles.phantomStyle} />
        <div style={styles.footerStyle}>{children}</div>
      </div>
    );
  }

const PageLayout = ({children, ...rest}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Flexbox style={styles.navbar}>
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

const styles = {
  navbar:{
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
  },
  footerStyle: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  },
  phantomStyle: {
    display: "block",
    height: "5vh",
    minHeight: '40px',
    width: "100%"
  },
}

export default PageLayout;
