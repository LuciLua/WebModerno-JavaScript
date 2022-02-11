// tem que ser improtado o React pois quando o JSX for convertido pras funcoes internas a dependencia do react vai ser usada
import React from 'react';
import ReactDOM from 'react-dom';

import First from './components/First';

const elementos = [<h1>React!</h1>, <First/>]

ReactDOM.render(
    // esse h1 nao é html puro, mas sim JSX (JS extendido), que será convertido em "HTML" atravez do react
    elementos, document.getElementById('root') // colocando h1 dentro de root
)

// reactNative para dispositivos


