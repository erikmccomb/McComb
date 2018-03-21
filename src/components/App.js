// Required by React
  import React from 'react';
  import { 
    BrowserRouter as Router,
    Route,  
    Switch 
  } from 'react-router-dom';
// Layouts
  import PageLayout from '../layouts/PageLayout';
// Components
  import Mccomb from './Mccomb';
  import Portfolio from './Portfolio';
  import Contact from './Contact';
  import Resume from './Resume';
  import NoMatch from './NoMatch';

const PageLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <PageLayout style={{height: '100vh'}}>
        <Component {...matchProps} />
      </PageLayout>
    )} />
  )
}

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <PageLayoutRoute exact path='/' component={Mccomb} />
          <PageLayoutRoute exact path='/McComb' component={Mccomb} />
          <PageLayoutRoute exact path='/Portfolio' component={Portfolio} />
          <PageLayoutRoute exact path='/Resume' component={Resume} />
          <PageLayoutRoute exact path='/Contact' component={Contact} />
          <PageLayoutRoute component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App;
