import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer />, document.getElementById('root'));
registerServiceWorker();
