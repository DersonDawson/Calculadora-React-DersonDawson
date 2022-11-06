import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import DersonDawson from './Imagem2.png';
ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
        
    </div>
, document.getElementById('root'));

ReactDOM.render(
    <div>
       <img src={DersonDawson} className="Derson" alt="logo"/>
        
    </div>
, document.getElementById('foto'));





serviceWorker.unregister();
