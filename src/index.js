import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Background from './BackgroundVisuals';
import registerServiceWorker from './registerServiceWorker';

const elements = (
    <React.Fragment>
        <App/>
        <Background/>
    </React.Fragment>
)

ReactDOM.render(elements, document.querySelector('body'));

registerServiceWorker();
