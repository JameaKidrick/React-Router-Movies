import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

// STEP 1: WRAP APP IN ROUTER
// GO TO APP.JS FOR STEP 2

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);
