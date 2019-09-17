import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';

const root=(
    <SnackbarProvider maxSnack={3}>
        <App />
    </SnackbarProvider>
);
ReactDOM.render(root , document.getElementById('root'));

serviceWorker.unregister();
