import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './WelcomePage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App.js />, document.getElementById('root'));

serviceWorker.unregister();
