// Required by React
  import React from 'react';
  import ReactDOM from 'react-dom';
  import registerServiceWorker from './registerServiceWorker';
// Styling covering the entire app
  import {injectGlobal} from 'styled-components';
  import './index.css';
// Components
  import App from './components/App';

injectGlobal `
  body{
    min-height: 100%;
    margin:0px;
    padding: 0px;
    background-color: #2b2c28;
    color: #fefcfb;
  },
`

const Root = () => {
  return (
    <div style={{height: '100vh'}}>
      <App />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
