import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css?ver=1.1';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
