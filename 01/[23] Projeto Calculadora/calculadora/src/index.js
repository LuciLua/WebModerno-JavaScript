import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './index.css';
// App
import Calculator from './main/Calculator';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <h1>Calculadora</h1>
    <Calculator/>
  </>
  , document.getElementById('root'));

reportWebVitals();
