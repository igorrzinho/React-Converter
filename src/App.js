import React, { Fragment } from 'react';
import Converter from './component/conventer';

import "./App.css"

function App() {
  return (
    <Fragment>
      <h2 className='title'>conversor de moedas</h2>
      <div className="container">
        
        <Converter moedaA='USD' moedaB='BRL'/>
        <Converter moedaA='BRL' moedaB='USD'/>
        <Converter moedaA='EUR' moedaB='BRL'/>
        <Converter moedaA='BRL' moedaB='EUR'/>
        <Converter moedaA='CAD' moedaB='BRL'/>
        <Converter moedaA='BRL' moedaB='CAD'/>
      </div>
    </Fragment>
  );
}

export default App;
