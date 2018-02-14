// Required by React
  import React from 'react';
  import ReactDOM from 'react-dom';
  import registerServiceWorker from './registerServiceWorker';
// Styling covering the entire app
  import {injectGlobal} from 'styled-components';
  import './css/index.css';
// Components
  import App from './components/App';

injectGlobal `
  body{
    min-height: 100%;
    margin:0px;
    padding: 0px;
    font-family: helvetica neue, helvetica, arial, sansSerif;
    background-color: #e1e6e7;
    font-weight: 300;
  }
`

const Root = () => {
  return (
    <App />
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
