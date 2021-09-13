//react
import React from 'react';
import ReactDOM from 'react-dom';
//css
import './index.css';
//app
import App from './App';
//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);