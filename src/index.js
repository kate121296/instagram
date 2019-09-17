import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomePage from './WelcomePage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WelcomePage />, document.getElementById('root'));

serviceWorker.unregister();
