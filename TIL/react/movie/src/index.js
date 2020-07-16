import React from 'react';
import ReactDOM from 'react-dom';
import App from './(1)propsEx';
import CheckProps from './(2)checkProps';
import Checkstate from './(3)ClassAndState';
import LifeCycle from './(4)ComponentLifeCycle';
import Movies from './(5)Movies';

ReactDOM.render(
  <React.StrictMode>
    <Movies/>
  </React.StrictMode>,
  document.getElementById('root')
);
