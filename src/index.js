import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var data = {
  name: "Ryan",
  favoriteColor: "",
  currentJob: "",
  wifeName: "",
  favoriteFood: ""
}

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
