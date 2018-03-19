// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';
  import Footer from '../components/Footer';
  import Flexbox from 'flexbox-react';
  import '../css/App.css';

const PageLayout = ({children, ...rest}) => {
  return (
    <Flexbox flexDirection="column" style={{height: '100vh'}}>
      <Flexbox>
        <Flexbox className="fadeNav" style={styles.navbar}>
          <NavBar />
        </Flexbox>
        <Flexbox style={{flex: "1 1 auto"}}>
          {children}
        </Flexbox>
        <Flexbox style={styles.footerStyle}>
          <Footer/>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

const styles = {
  navbar:{
    position: "fixed",
    left: "0",
    Top: "0",
    width: "100vw",
    margin: "0px",
    padding: "0px",
    flex: "0 0 auto",
  },
  footerStyle: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100vw",
    margin: "0px",
    padding: "0px",
    flex: "0 0 auto",
  },
}

export default PageLayout;
