// Required by React
  import React from 'react';
//Components
  import NavBar from '../components/NavBar';

const PageLayout = ({children, ...rest}) => {
  return (
    <div >
      <div>
        <NavBar />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageLayout;
