import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './currenthistory'
//mport {Link,Router, Route, hashHistory} from 'react-router';
import { Router } from 'react-router-dom'
import { render } from 'react-dom';


ReactDOM.render((
    <Router history={history}>
      <App />
    </Router>
  ), document.getElementById('root'));
registerServiceWorker();
