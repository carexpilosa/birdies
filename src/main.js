'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Birdies from './components/Birdies';

let birdies = [
  {
    id: 'turdusMerula',
    name: 'Amsel',
    desc: 'Schwarzes Vögelchen'},
  {
    id: 'turdusPhilomelos',
    name: 'Sing-Drossel',
    desc: 'Gesprenkelte Drossel'
  },
  {
    id: 'fringillaCoelebs',
    name: 'Buch-Fink',
    desc: 'Häufigster Vogel Deutschlands'
  },
  {
    id: 'sturnusVulgaris',
    name: 'Star',
    desc: 'Feind der Winzer und Obstbauern, spektakuläre Flugmanöver von Schwärmen'
  },
  {
    id: 'corvusCorone',
    name: 'Aas-Krähe',
    desc: 'Nebel- und Raben-Krähe sind Unterarten'
  },
  {
    id: 'dendrocoposMajor',
    name: 'Bunt-Specht', 
    desc: 'häufigster Specht'
  }
];

ReactDOM.render(
  <span>
    <Birdies birdies={birdies} />
  </span>,
  document.getElementById('app')
);
