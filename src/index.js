import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

const activity = {
    name : "Abdul khaliq",
    assignment : "Props & html tags"
}

ReactDOM.render(
    <App activity = {activity}/>,
  document.getElementById("root"));