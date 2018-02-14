// Required by React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Styling covering the entire app
import './css/index.css';

// Components
import App from './components/App';


const Root = () => {
  return (
    <div >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
