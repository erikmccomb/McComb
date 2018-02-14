// Required by React
  import React from 'react';
  import { 
    Route,  
    Switch 
  } from 'react-router-dom';
// Layouts
  import PageLayout from '../layouts/PageLayout';
// Components
  import Mccomb from './Mccomb';
  import NoMatch from './NoMatch';

const PageLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <PageLayout>
        <Component {...matchProps} />
      </PageLayout>
    )} />
  )
}

class App extends React.Component {
  render(){
    return (
      <Switch>
        <PageLayoutRoute exact path='/' component={Mccomb} />
        <PageLayoutRoute component={NoMatch} />
      </Switch>
    )
  }
}

export default App;
