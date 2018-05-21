import React from 'react';
import { 
  BrowserRouter as Router,
  Route,  
  Switch 
} from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import SplashLayout from '../layouts/SplashLayout';
import Mccomb from './Mccomb';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './MccombComponents/Resume';
import NoMatch from './NoMatch';
import Splash from './Splash';


const PageLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <PageLayout >
        <Component {...matchProps} />
      </PageLayout>
    )} />
  )
}

const SplashLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <SplashLayout>
        <Component {...matchProps} />
      </SplashLayout>
    )} />
  )
}

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <SplashLayoutRoute exact path='/' component={Splash} />
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
