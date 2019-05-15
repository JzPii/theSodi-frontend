import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import BoothID from './insideBooth/BoothID';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import test1ti from './test1ti';

function AppRouter() {
    return (
      <Router>
        <div>  
          <Route path="/" exact component={App} />
          <Route path="/boothid" exact component={BoothID} />
          <Route path="/test1ti" exact component={test1ti} />

        </div>
      </Router>
    );
  }
  








ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
